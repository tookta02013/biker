import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterStep5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-step5',
  templateUrl: 'register-step5.html',
})
export class RegisterStep5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterStep5Page');
  }
  submit() {
    let alert = this.alertCtrl.create({
      title: 'คุณลงทะเบียนเรียบร้อยแล้ว',
      subTitle: 'ยินดีด้วย! คุณสามารถเข้ามาอบรถได้เลย ตามตารางที่เลือกไว้ (หากรอบอบรมเต็ม จะต้องรอรอบถัดไป)',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(LoginPage);
  }
}
