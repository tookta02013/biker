import { ShopModel } from "../job/job.model";

export class JobDetailModel {
    _id: string;
    data: Date;
    shop: ShopModel = new ShopModel();
    customer: ShopModel = new ShopModel();
    product:Array<product>;
    total: number;
    shipping: number;
    amount: number;
}

export class product{
    name: string;
    price: number;
    qty: number;
}