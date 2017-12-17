import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JobDetailModel } from "./jobdetail.model";
import { JobdetailProvider } from './sevicejobdetail';

/**
 * Generated class for the JobdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobdetail',
  templateUrl: 'jobdetail.html',
})
export class JobdetailPage {

  Datajobdetail: JobDetailModel=new JobDetailModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public JobdetailProvider: JobdetailProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobdetailPage');
    this.getOrderdetail();
  }
  getOrderdetail() {
    this.JobdetailProvider.getJobdetail().then(data => {
      
      this.Datajobdetail = data;
      
      console.log(this.Datajobdetail);
    });
  }
}
