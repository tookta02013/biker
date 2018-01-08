import { RegisterStep5Page } from './../register-step5/register-step5';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterStep4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-step4',
  templateUrl: 'register-step4.html',
})
export class RegisterStep4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterStep4Page');
  }
  nextStep4() {
    this.navCtrl.push(RegisterStep5Page);
  }

}
