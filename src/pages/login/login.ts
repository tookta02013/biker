import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterStep1Page } from '../register-step1/register-step1';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private credentials: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    alert('Login');
  }
  register() {
    console.log(this.credentials);
    this.navCtrl.push(RegisterStep1Page);
  }

  forgotPassword() {
    let alert = this.alertCtrl.create({
      title: 'ติดต่อขอรหัสผ่านใหม่',
      subTitle: 'Call Center 02-222-2222',
      buttons: ['OK']
    });
    alert.present();
  }
}
