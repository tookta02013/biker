import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterStep2Page } from '../register-step2/register-step2';

/**
 * Generated class for the RegisterStep1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-step1',
  templateUrl: 'register-step1.html',
})
export class RegisterStep1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterStep1Page');
  }
  next() {
    this.navCtrl.push(RegisterStep2Page);
  }
}
