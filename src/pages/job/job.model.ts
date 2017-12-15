export class JobModel {
    _id: string;
    date: Date;
    shop: ShopModel = new ShopModel();
    customer : CustomerModel = new CustomerModel();
}
export class ShopModel {
    name: string;
    lat: string;
    long: string;
    address: string;
    tel: string;
}
export class CustomerModel{
    name: string;
    lat: string;
    long: string;
    address: string;
    tel: string;
}