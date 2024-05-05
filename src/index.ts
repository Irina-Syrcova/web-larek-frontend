import './scss/styles.scss';
import { LarekAPI } from './components/LarekAPI';
import { API_URL, CDN_URL } from './utils/constants';
import { AppState, CatalogChangeEvent, ProductItem } from './components/AppData';
import { Page } from './components/Page';
import { cloneTemplate, createElement, ensureElement } from './utils/utils';
import { Card, Preview } from './components/Card';
import { EventEmitter } from './components/base/events';
import { Modal } from './components/common/Modal';
import { Basket } from './components/common/Basket';

const events = new EventEmitter();
const api = new LarekAPI(CDN_URL, API_URL);

// Чтобы мониторить все события, для отладки
events.onAll(({ eventName, data }) => {
    console.log(eventName, data);
})

// Все шаблоны
const cardCatalogTemplate = ensureElement<HTMLTemplateElement>('#card-catalog');
const cardPreviewTemplate = ensureElement<HTMLTemplateElement>('#card-preview');
// const auctionTemplate = ensureElement<HTMLTemplateElement>('#auction');
const cardBasketTemplate = ensureElement<HTMLTemplateElement>('#card-basket');
const bidsTemplate = ensureElement<HTMLTemplateElement>('.basket__list');
const basketTemplate = ensureElement<HTMLTemplateElement>('#basket');
// const tabsTemplate = ensureElement<HTMLTemplateElement>('#tabs');
// const soldTemplate = ensureElement<HTMLTemplateElement>('#sold');
// const orderTemplate = ensureElement<HTMLTemplateElement>('#order');
// const successTemplate = ensureElement<HTMLTemplateElement>('#success');

// Модель данных приложения
const appData = new AppState({}, events);

// Глобальные контейнеры
const page = new Page(document.body, events);
const modal = new Modal(ensureElement<HTMLElement>('#modal-container'), events);

// Переиспользуемые части интерфейса
// const bids = new Basket(cloneTemplate(bidsTemplate), events);
const basket = new Basket(cloneTemplate(basketTemplate), events);
// const order = new Order(cloneTemplate(orderTemplate), events);

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

    // page.counter = appData.getSelectedCards().length;
});


// Отправлена форма заказа
// events.on('order:submit', () => {
//     api.orderLots(appData.order)
//         .then((result) => {
//             const success = new Success(cloneTemplate(successTemplate), {
//                 onClick: () => {
//                     modal.close();
//                     appData.clearBasket();
//                     events.emit('auction:changed');
//                 }
//             });

//             modal.render({
//                 content: success.render({})
//             });
//         })
//         .catch(err => {
//             console.error(err);
//         });
// });

// Изменилось состояние валидации формы
// events.on('formErrors:change', (errors: Partial<IOrderForm>) => {
//     const { email, phone } = errors;
//     order.valid = !email && !phone;
//     order.errors = Object.values({phone, email}).filter(i => !!i).join('; ');
// });

// Изменилось одно из полей
// events.on(/^order\..*:change/, (data: { field: keyof IOrderForm, value: string }) => {
//     appData.setOrderField(data.field, data.value);
// });

// Открыть форму заказа
// events.on('order:open', () => {
//     modal.render({
//         content: order.render({
//             phone: '',
//             email: '',
//             valid: false,
//             errors: []
//         })
//     });
// });

events.on('bids:open', () => {
    modal.render({
        content: createElement<HTMLElement>('div', {}, [
            basket.render()
        ])
    })
});

// Изменения в лоте, но лучше все пересчитать
// events.on('preview:select', () => {
//     page.counter = appData.getSelectedCards().length;
//     basket.items = appData.getSelectedCards().map(item => {
//         const card = new Preview(cloneTemplate(cardPreviewTemplate), {
//             onClick: () => events.emit('preview:delete', item)
//         });
//         return card.render({
//             title: item.title,
//             image: item.image,
//         });
//     });
//     let total = 0;
//     // basket.selected = appData.order.items;
//     basket.total = total;
// })

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
                category:  item.category,
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