export class DistrictModel {
    status : string;
    select : Array<LocationModel> = [];
}

export class LocationModel{
    locationcode: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
    address: string;
}
