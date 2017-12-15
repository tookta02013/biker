import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JobdetailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JobdetailProvider {

  constructor(public http: HttpClient) {
    console.log('Hello JobdetailProvider Provider');
  }
  getJobdetail(){
    return this.http.get("./assets/json/orderdetail.json")
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
