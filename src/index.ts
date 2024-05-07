import './scss/styles.scss';
import { LarekAPI } from './components/LarekAPI';
import { API_URL, CDN_URL } from './utils/constants';
import { AppState, CatalogChangeEvent, ProductItem } from './components/AppData';
import { Page } from './components/Page';
import { cloneTemplate, createElement, ensureElement } from './utils/utils';
import { BasketItem, Card, Preview } from './components/Card';
import { EventEmitter } from './components/base/events';
import { Modal } from './components/common/Modal';
import { Basket } from './components/common/Basket';
import { Address, Contacts } from './components/Order';
import { IFormAddress, IFormContacts } from './types';
import { Success } from './components/common/Success';

const events = new EventEmitter();
const api = new LarekAPI(CDN_URL, API_URL);

// Чтобы мониторить все события, для отладки
events.onAll(({ eventName, data }) => {
    console.log(eventName, data);
})

// Все шаблоны
const cardCatalogTemplate = ensureElement<HTMLTemplateElement>('#card-catalog');
const cardPreviewTemplate = ensureElement<HTMLTemplateElement>('#card-preview');
const cardBasketTemplate = ensureElement<HTMLTemplateElement>('#card-basket');
const basketTemplate = ensureElement<HTMLTemplateElement>('#basket');
const orderTemplate = ensureElement<HTMLTemplateElement>('#order');
const contatsTemplate = ensureElement<HTMLTemplateElement>('#contacts');
const successTemplate = ensureElement<HTMLTemplateElement>('#success');

// Модель данных приложения
const appData = new AppState({}, events);

// Глобальные контейнеры
const page = new Page(document.body, events);
const modal = new Modal(ensureElement<HTMLElement>('#modal-container'), events);

// Переиспользуемые части интерфейса
const basket = new Basket(cloneTemplate(basketTemplate), events);
const order = new Address(cloneTemplate(orderTemplate), events);
const contacts = new Contacts(cloneTemplate(contatsTemplate), events)

// Дальше идет бизнес-логика
// Поймали событие, сделали что нужно

// Изменились элементы каталога
events.on<CatalogChangeEvent>('items:changed', () => {
    page.catalog = appData.catalog.map(item => {
        const card = new Card(cloneTemplate(cardCatalogTemplate), {
            onClick: () => events.emit('card:select', item)
        });
        return card.render({
            category: item.category,
            title: item.title,
            image: item.image,
            price: item.price
        });
    });

    page.counter = appData.order.items.length;
});

// Отправлена форма заказа
events.on('contacts:submit', () => {
    api.orderProduct(appData.order)
        .then((result) => {
            const success = new Success(cloneTemplate(successTemplate), {
                onClick: () => {
                    modal.close();
                    appData.clearBasket();
                    events.emit('items:changed');
                }
            });

            modal.render({
                content: success.render({
                    total: result.total
                })
            })
        })
        .catch(err => {
            console.error(err);
        })
})

// Изменилось состояние валидации формы
events.on('formErrors:change', (errors: Partial<IFormAddress>) => {
    const { address, payment } = errors;
    order.valid = !address && !payment;
    order.errors = Object.values({address, payment}).filter(i => !!i).join('; ');
});

events.on('formErrors:change', (errors: Partial<IFormContacts>) => {
    const { phone, email } = errors;
    contacts.valid = !phone && !email;
    contacts.errors = Object.values({phone, email}).filter(i => !!i).join('; ');
})

// Изменилось одно из полей
events.on(/^order\..*:change/, (data: { field: keyof IFormAddress, value: string }) => {
    appData.setAddressField(data.field, data.value);
});

events.on(/^contacts\..*:change/, (data: { field: keyof IFormContacts, value: string }) => {
    appData.setContactsField(data.field, data.value);
});

// Открыть форму заказа
events.on('order:open', () => {
    modal.render({
        content: order.render({
            address: '',
            valid: false,
            errors: []
        })
    });
});

// Поддтверждена форма с адресом 
events.on('order:submit', () => {
    modal.render({
        content: contacts.render({
            valid: false,
            errors: [],
            phone: '',
            email: ''
        })
    })
})

// Нажата кнопка оплаты по карте
events.on('cardpay:change', () => {
    order.toogleButtonCardpay()
    appData.order.payment = order.payment

})

// Нажата кнопка оплаты наличкой
events.on('cashpay:change', () => {
    order.toggleButtonCashpay()
    appData.order.payment = order.payment
})

// Открыта корзина
events.on('bids:open', () => {
    modal.render({
        content: createElement<HTMLElement>('div', {}, [
            basket.render()
        ])
    })
    basket.button = appData.order.items
});

// Удаляется карточка из корзины
events.on('preview:delete', (item: ProductItem) => {
    if(appData.order.items.includes(item.id)) {
        appData.order.items.splice(appData.order.items.indexOf(item.id), 1)
    }
    basket.items = appData.getSelectedCards().map(item => {
        const card = new BasketItem(cloneTemplate(cardBasketTemplate), {
            onClick: () => events.emit('preview:delete', item)
        });
        return card.render({
            title: item.title,
            price: item.price,
            number: (appData.getSelectedCards().indexOf(item) + 1)
        });
    });
    page.counter = appData.order.items.length;
    appData.total = appData.getTotal();
    basket.total = `${appData.order.total} синапсов`;
    basket.button = appData.order.items
})

// Добавлена карточка в корзину
events.on('preview:select', (item: ProductItem) => {
    modal.close()
    console.log(item)
    
    if(!appData.order.items.includes(item.id) && item.price !== null) {
        appData.order.items.push(item.id)
    }

    basket.items = appData.getSelectedCards().map(item => {
        const card = new BasketItem(cloneTemplate(cardBasketTemplate), {
            onClick: () => events.emit('preview:delete', item)
        });
        return card.render({
            title: item.title,
            price: item.price,
            number: (appData.getSelectedCards().indexOf(item) + 1)
        });
    });
    page.counter = appData.order.items.length;
    appData.total = appData.getTotal();
    basket.total = `${appData.order.total} синапсов`;
    basket.button = appData.order.items
})
// Открыть карточку
events.on('card:select', (item: ProductItem) => {
    appData.setPreview(item);
});

// Изменен открытый выбранный лот
events.on('preview:changed', (item: ProductItem) => {
    const showItem = (item: ProductItem) => {
        const card = new Preview(cloneTemplate(cardPreviewTemplate), {
            onClick: () => events.emit('preview:select', item)
        });

        modal.render({
            content: card.render({
                category: item.category,
                title: item.title,
                image: item.image,
                price: item.price,
                description: item.description,
            })
        });
    };
    if (item) {
        api.getProductItem(item.id)
            .then((result) => {
                item.category = result.category;
                item.title = result.title;
                item.image = result.image;
                item.price = result.price;
                item.description = result.description;
                showItem(item);
            })
            .catch((err) => {
                console.error(err);
            })
    } else {
        modal.close();
    }
});

// Блокируем прокрутку страницы если открыта модалка
events.on('modal:open', () => {
    page.locked = true;
});

// ... и разблокируем
events.on('modal:close', () => {
    page.locked = false;
});

// Получаем лоты с сервера
api.getProductList()
    .then(appData.setCatalog.bind(appData))
    .catch(err => {
        console.error(err);
    });