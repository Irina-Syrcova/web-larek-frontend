import {Form} from "./common/Form";
import {IFormAddress, IFormContacts} from "../types";
import {IEvents} from "./base/Events";
import {ensureElement} from "../utils/utils";

export class Address extends Form<IFormAddress> {
    protected _card: HTMLButtonElement;
    protected _cash: HTMLButtonElement;
    protected _payment: HTMLDivElement;

    constructor(container: HTMLFormElement, events: IEvents) {
        super(container, events);
        this._card = ensureElement<HTMLButtonElement>('button[name=card]', this.container);
        this._cash = ensureElement<HTMLButtonElement>('button[name=cash]', this.container);
        this._payment = ensureElement<HTMLDivElement>('.order__buttons', this.container)

        this._card.addEventListener('click', (e: Event) => {
            this.events.emit(`cardpay:change`);
        });

        this._cash.addEventListener('click', (e: Event) => {
            this.events.emit(`cashpay:change`);
        });
    }
    
    toogleButtonCardpay() {
        if (this._cash.classList.contains(`button_alt-active`)) {
            this.toggleClass(this._cash, `button_alt-active`)
        }
        this.toggleClass(this._card, `button_alt-active`);
    }

    toggleButtonCashpay() {
        if (this._card.classList.contains(`button_alt-active`)) {
            this.toggleClass(this._card, `button_alt-active`)
        }
        this.toggleClass(this._cash, `button_alt-active`);
    }

    get payment() {
        if (this._card.classList.contains(`button_alt-active`)) {
            return 'card'
        }
        if (this._cash.classList.contains(`button_alt-active`)) {
            return 'cash'
        }
    }

    set address(value: string) {
        (this.container.elements.namedItem('address') as HTMLInputElement).value = value;
    }
}

export class Contacts extends Form<IFormContacts> {
    constructor(container: HTMLFormElement, events: IEvents) {
        super(container, events);
    }

    set phone(value: string) {
        (this.container.elements.namedItem('phone') as HTMLInputElement).value = value;
    }

    set email(value: string) {
        (this.container.elements.namedItem('email') as HTMLInputElement).value = value;
    }
}