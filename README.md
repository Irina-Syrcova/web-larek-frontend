# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## Данные и типы данных используемые в приложении

Интерфейс для хранения данных карточки

```
export interface IProductItem {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}
```

Каталог карточек

```
export interface IProductList {
    cards: IProductItem[]
}
```
Интерфейс для хранения данных для оформления заказа

```
export interface IOrder {
    payment: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
}
```

Интерфейс для данных получаемых при успешном заказе

```
export interface IOrderResult {
    id: string;
    total: number;
}
```

Данные для формы оформления адреса

```
export type IFormAddress = Pick<IOrder, 'payment' | 'address'>;
```

Данные для формы оформления с контактами

```
export type IFormContacts = Pick<IOrder, 'phone' | 'email'>;
```

Интерфейс для хранения данных приложения

```
export interface IAppState {
    catalog: IProductItem[];
    preview: string | null,
    basket: string[],
    loading: boolean,
    order: IOrder,
    formErrors: FormErrors;
}
```

Данные об ошибках

```
export type FormErrors = Partial<Record<keyof IOrder, string>>;
```

### Архитектура приложения

Код приложения разделен на слои согласно парадигме MVP;
- слой представления, отвечает за отображение данных на странице,
- слой данных, отвечает за хранение и изменение данных,
- презентер, отвечает за связь представления и данных.

### Базовый код

#### Класс Api
Содержит в себе базовую логику отправки запросов. В конструктор передается базовый адрес сервера и опциональный объект с заголовками запросов.
Методы:
- `get` - выполняет GET запрос на переданный в параметрах ендпоинт и возращает промис с объектом, которым ответил сервер
- `post` - принимает объект с данными, которые будут переданы в JSON в теле запроса, и отправляет эти данные на ендпоинт переданный как параметр при вызове метода. По умолчанию выполняется 'POST' запрос, но метод запроса может быть переопределен заданием третьего параметра при вызове.

#### Класс EventEmitter
Брокер событий позволяет отправлять событие и подписываться на события, происходящие в системе. Класс используется в презинтере для обработки событий и в слоях приложения для генерации событий.
Основные методы, реализуемые классом описаны интерфейсом `IEvents`;
- `on` - подписка на событие
- `emit` - инициализация событий
- `trigger` - возвращает функцию, при вызове которой инициализируется требуемое в параметрах событие

#### Класс Component
Класс является дженериком и принимает в переменной  T  тип данных
Методы:
- `toggleClass` - для переключения класса,
- `setText` - для установки текстового содержимого,
- `setDisabled` - для смены статуса блокировки,
- `setHidden` - для скрытия,
- `setVisible` - для показа,
- `setImage` - для установки изображения с альтернативным текстом,
- `render` - для возвращиения корневого DOM-элемента

#### Класс Model
Базовая модель, чтобы можно было отличить ее от простых объектов с данными
Методы:
- `emitChanges` - для сообщения, что модель поменялась

### Слой данных

#### Класс ProductItem
Класс расширяет класс `Model`, отвечает за хранение данных товара
- `id: string` - id товара,
- `description: string` - описание товара,
- `image: string` - изображение товара,
- `title: string` - название товара,
- `category: string` - категория товара,
- `price: number | null` - цена товара

#### Класс AppState
Отвечает за хранение всех данных приложения
Методы:
- `set total` - заполняет итоговую цену товаров в корзине,
- `getSelectedCards()` - возвращает каталог товаров в корзине,
- `clearBasket()` - отчищает корзину,
- `getTotal()` - считает итогувую цену,
- `setCatalog(items: IProductItem[])` - устанавливает каталог карточек,
- `setPreview(item: ProductItem)` - устанавливает превью карточки,
- `setAddressField(field: keyof IFormAddress, value: string)` - заполняет данные приложения данными введенными в поля ввода формы,
- `setContactsField(field: keyof IFormContacts, value: string)` - заполняет данные приложения данными введенными в поля ввода формы,
- `validateOrder()` - проверяет валидна ли форма

### Слой представления

#### Класс Basket
Класс расширяет класс `Component`, отвечает за отображение корзины на странице.
Поля класса содержат элементы разметки корзины. Конструктор принимает как аргументы темплейт и экземпляр `EventEmitte`.
Методы:
- `set items(items: HTMLElement[])` - заполняет корзину товарами,
- `set button(items: string[])` - проверяет есть ли товары в корзине и возвращает активную или неактивную кнопку,
- `clearBasket()` - отчищает корзину,
- `getTotal()` - считает итогувую цену,
- `set total(total: string)` - устанавливает цену товаров в корзине

#### Класс Form
Класс расширяет класс `Component`, отвечает за отображение формы на странице.
Поля класса содержат элементы разметки корзины. Конструктор принимает как аргументы темплейт и экземпляр `EventEmitte`.
Методы:
- `onInputChange(field: keyof T, value: string)` - сообщает что произошли изменения в форме ввода,
- `set valid(value: boolean)` - устанавливает валидность формы,
- `set errors(value: string)` - устанавливает ошибки формы,
- `render(state: Partial<T> & IFormState)` - возвращает корневой DOM-элемент

#### Класс Modal
Класс расширяет класс `Component`, отвечает за отображение модального окна на странице.
Поля класса содержат элементы разметки модального окна. Конструктор принимает как аргументы темплейт и экземпляр `EventEmitte`.
Методы:
- `set content(value: HTMLElement)` - устанавливает DOM-элемент внутри модального окна,
- `open()` - открывает модальное окно,
- `close()` - закрывает модальное окно,
- `render(data: IModalData): HTMLElement` - возвращает корневой DOM-элемент

#### Класс Success
Класс расширяет класс `Component`, отвечает за отображение успешной отправки на странице.
Поля класса содержат элементы разметки успешной отправки.
Методы:
- `set total(value: number)` - устанавливает итоговую стоимость

#### Класс Card
Класс расширяет класс `Component`, отвечает за отображение карточки каталога на странице.
Поля класса содержат элементы разметки карточки.
Методы:
- `set id(value: string)` - устанавливает id карточки,
- `get id(): string` - получает id карточки,
- `set title(value: string)` - устанавливает название карточки,
- `set image(value: string)` - устанавливает изображение карточки,
- `set price(value: number)` - устанавливает стоимость карточки,
- `set category(value: string)` - устанавливает категорию карточки,
- `categoryStyle(value: string): string` - возвращает нужный класс для категории карточки

#### Класс Preview
Класс расширяет класс `Card`, отвечает за отображение превью карточки на странице.
Поля класса содержат элементы разметки карточки.
Методы:
- `set description(value: string)` - устанавливает описание карточки,
- `set category(value: string)` - устанавливает категорию карточки

#### Класс 
Класс расширяет класс `Card`, отвечает за отображение карточки в корзине.
Поля класса содержат элементы разметки карточки.
Методы:
- `set title(value: string)` - устанавливает название карточки,
- `set price(value: number)` - устанавливает цену карточки,
- `set number(value: number)` - устанавливает номер карточки в корзине

#### Класс LarekAPI
Класс расширяет класс `Api`.
Конструктор класса получает в качестве аргументов: часть адресса для отображения изображения карточек, базовый адресс запроса.
Методы:
- `getProductItem(id: string)` - функция для получения каталога карточек,
- `getProductList(): Promise<IProductItem[]>` - функция для получения данных для одной карточки с указанным id,
- `orderProduct(order: IOrder)` - функция для получения данных при успешной отправки заказа

#### Класс Address
Класс расширяет класс `Form`, отвечает за отображение формы с адрессом в модальном окне.
Методы:
- `set address(value: string)` - устанавливает значение инпута с адрессом,
- `get payment()` - получает значение выбора оплаты,
- `toogleButtonCardpay()` - функция для смены активной кнопки,
- `toggleButtonCashpay()` - смены активной кнопки
    
#### Класс Contacts
Класс расширяет класс `Form`, отвечает за отображение формы с телефоном и почтой в модальном окне.
Методы:
- `set phone(value: string)` - устанавливает значение инпута с почтой,
- `set email(value: string)` - устанавливает значение инпута с телефоном

#### Класс Page
Класс расширяет класс `Component`, отвечает за отображение элементов страницы.
Методы:
- `set counter(value: number)` - устанавливает счетчик карточек в корзине,
- `set catalog(items: HTMLElement[])` - устанавливает каталог на странице,
- `set locked(value: boolean)` - устанавливает блокировку страницы при открытии модального окна