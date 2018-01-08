import { DateTime } from "ionic-angular/components/datetime/datetime";

export class NearbyModel {
    name  : string;
    address : AddressModel = new AddressModel();
    location : LocationModel = new LocationModel();
    coverimage: string;
    timestart: DateTime;
    timeend: DateTime;
    ratingstatus: string;
    distance: string;
}
export class AddressModel {
    addressdetail: string;
    address: string;
    postcode: string;
    district: string;
    subdistrict: string;
    province: string;  
}
export class LocationModel {
    lat: string;
    long: string;
}

