import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterStep4Page } from '../register-step4/register-step4';

/**
 * Generated class for the RegisterStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-step3',
  templateUrl: 'register-step3.html',
})
export class RegisterStep3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterStep3Page');
  }
  nextStep3() {
    this.navCtrl.push(RegisterStep4Page);
  }
}
