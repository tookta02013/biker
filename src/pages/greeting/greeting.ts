import { Component, ViewChild } from '@angular/core';
import { Slides, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgreementPage } from '../agreement/agreement';

/**
 * Generated class for the GreetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-greeting',
  templateUrl: 'greeting.html',
})
export class GreetingPage {
  lastSlide = false;

  @ViewChild('slider') slider: Slides;
  slideIndex = 0;
  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: './assets/imgs/Greeting1.png',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: './assets/imgs/Greeting2.png',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: './assets/imgs/Greeting3.png',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: './assets/imgs/Greeting4.png',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: './assets/imgs/Greeting5.png',
      description: 'Take a look at our amazing options',
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GreetingPage');
  }
  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.slideIndex);
  }

  goToApp() {
    this.navCtrl.setRoot(AgreementPage);
    console.log('Go to App clicked');
  }
  skip() {
    this.lastSlide = true;
    this.slider.slideTo(this.slider.length());
  }

}
