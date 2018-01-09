import { RegisterStep6Page } from './../register-step6/register-step6';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-step2',
  templateUrl: 'register-step2.html',
})
export class RegisterStep2Page {
  dataUser: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataUser = this.navParams.data;
    console.log('step2', this.dataUser);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterStep2Page');
  }
  nextStep2(dataUser) {
    this.navCtrl.push(RegisterStep6Page, dataUser);
  }
}
