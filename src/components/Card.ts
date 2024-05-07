import { ensureElement } from "../utils/utils";
import { Component } from "./base/Component";

interface ICardActions {
    onClick: (event: MouseEvent) => void;
}

export interface ICard{
    category?: string;
    title: string;
    image?: string;
    price: number;
    description?: string;
    number?: number;
}

export class Card extends Component<ICard> {
    protected _category: HTMLSpanElement;
    protected _title: HTMLElement;
    protected _image: HTMLImageElement;
    protected _price: HTMLSpanElement;
    protected _card: HTMLButtonElement;

    constructor(container: HTMLElement, actions?: ICardActions) {
        super(container);

        this._card = container.querySelector(`.card`);
        this._category = ensureElement<HTMLSpanElement>(`.card__category`, container);
        this._title = ensureElement<HTMLElement>(`.card__title`, container);
        this._image = ensureElement<HTMLImageElement>(`.card__image`, container);
        this._price = ensureElement<HTMLElement>(`.card__price`, container);

        if (actions?.onClick) {
            container.addEventListener('click', actions.onClick);
        }
    }

    set id(value: string) {
        this.container.dataset.id = value;
    }

    get id(): string {
        return this.container.dataset.id || '';
    }

    set title(value: string) {
        this.setText(this._title, value);
    }

    set image(value: string) {
        this.setImage(this._image, value, this.title)
    }

    set price(value: number) {
        if (value === null) {
            this.setText(this._price, "Бесценно")
        } else {
            this.setText(this._price, `${value} синапсов`)
        }
    }

    set category(value: string) {
        this.setText(this._category, value)
        if (value !== "софт-скил") {
            this.toggleClass(this._category, `card__category_soft`);
            this.toggleClass(this._category, `card__category_${this.categoryStyle(value)}`)
        }
    }

    categoryStyle(value: string): string {
        switch (value) {
            case "софт-скил":
                return "soft"
            case "другое":
                return "other"
            case "дополнительное":
                return "additional"
            case "кнопка":
                return "button"
            case "хард-скил":
                return "hard"
            default:
                return this.category;
        }
    }
}

export class Preview extends Card {
    protected _button: HTMLButtonElement;
    protected _description: HTMLElement;

    constructor(container: HTMLElement, actions?: ICardActions) {
        super(container);
        this._button = ensureElement<HTMLButtonElement>(`.card__button`, container);
        this._description = ensureElement<HTMLElement>(`.card__text`, container);

        if (actions?.onClick) {
            this._button.addEventListener('click', actions.onClick);
        }
    }

    set description(value: string) {
        this.setText(this._description, value)
    }

    set category(value: string) {
        this.setText(this._category, value)
        if (value !== "другое") {
            this.toggleClass(this._category, `card__category_other`);
            this.toggleClass(this._category, `card__category_${this.categoryStyle(value)}`)
        }
    }
}

export class BasketItem extends Component<ICard> {
    protected _title: HTMLElement;
    protected _price: HTMLSpanElement;
    protected _card: HTMLElement;
    protected _button: HTMLButtonElement;
    protected _number:  HTMLSpanElement;

    constructor(container: HTMLElement, actions?: ICardActions) {
        super(container);

        this._card = container.querySelector(`.card`);
        this._title = ensureElement<HTMLElement>(`.card__title`, container);
        this._price = ensureElement<HTMLElement>(`.card__price`, container);
        this._button = ensureElement<HTMLButtonElement>(`.card__button`, container);
        this._number = ensureElement<HTMLSpanElement>(`.basket__item-index`, container);

        if (actions?.onClick) {
            if (this._button) {
                this._button.addEventListener('click', actions.onClick);
            } else {
                container.addEventListener('click', actions.onClick);
            }
        }
    }

    set title(value: string) {
        this.setText(this._title, value);
    }

    set price(value: number) {
        if (value === null) {
            this.setText(this._price, "Бесценно")
        } else {
            this.setText(this._price, `${value} синапсов`)
        }
    }

    set number(value: number) {
        this.setText(this._number, value)
    }
}