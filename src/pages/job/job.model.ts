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
    location : LocationShopModel = new LocationShopModel();
    tel: string;
}
export class LocationShopModel{
    locationcode: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
    address: string;
}

export class CustomerModel{
    name: string;
    lat: string;
    long: string;
    location : LocationCustomerModel = new LocationCustomerModel();
    tel: string;
}
export class LocationCustomerModel{
    locationcode: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
    address: string;
}