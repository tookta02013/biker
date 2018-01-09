import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterStep3Page } from '../register-step3/register-step3';

/**
 * Generated class for the RegisterStep6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-step6',
  templateUrl: 'register-step6.html',
})
export class RegisterStep6Page {
  dataUser: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataUser = this.navParams.data;
    console.log('step6', this.dataUser);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterStep6Page');
  }
  nextStep6(dataUser) {
    this.navCtrl.push(RegisterStep3Page, dataUser);
  }

}
