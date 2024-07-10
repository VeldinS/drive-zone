export interface Car {
    id: number;
    name: string;
    details: string;
    price: number;
    main_image_url: string;
    brand_id: number;
    type_id: number;
    seller_id: number;
    brand?: Brand;
    type?: Type;
    seller?: User;
}

export interface CarImage {
    id: number;
    car_id: number;
    image_url: string;
}

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
