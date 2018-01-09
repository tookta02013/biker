import { NearbyModel } from './nearby.model';
import { NearbyServiceProvider } from './../../providers/nearby-service/nearby-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage {
  nearby: Array<NearbyModel> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public nearbyService: NearbyServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearbyPage');
    this.getNearby();
  }
  getNearby() {
    this.nearbyService.getNearby().then(data => {
      this.nearby = data;
      console.log(this.nearby);
    }).catch(err => {

      })

  }

}
