export interface IProductItem {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

export interface IOrder {
    payment: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
}

export interface IOrderResult {
    id: string;
    total: number;
}

export type IFormAddress = Pick<IOrder, 'payment' | 'address'>;

export type IFormContacts = Pick<IOrder, 'phone' | 'email'>;

export interface IAppState {
    catalog: IProductItem[];
    preview: string | null,
    basket: string[],
    loading: boolean,
    order: IOrder,
    formErrors: FormErrors;
}

export type FormErrors = Partial<Record<keyof IOrder, string>>;

export type ApiListResponse<Type> = {
    items: Type[]
};