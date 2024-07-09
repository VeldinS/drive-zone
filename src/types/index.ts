export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface Brand {
    id: number;
    name: string;
}

export interface Type {
    id: number;
    name: string;
}

export interface Car {
    id: number;
    name: string;
    brand_id: number;
    type_id: number;
    price: number;
    seller_id: number;
    brand?: Brand;
    type?: Type;
    seller?: User;
}
