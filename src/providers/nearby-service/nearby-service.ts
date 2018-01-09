import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NearbyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NearbyServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NearbyServiceProvider Provider');
  }

  getNearby(){
    return this.http.get("./assets/json/nearbylist.json")
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
