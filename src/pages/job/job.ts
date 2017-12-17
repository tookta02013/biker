import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JobServiceProvider } from './job-service';
import { JobModel } from './job.model';
import { JobdetailPage } from '../jobdetail/jobdetail';
import { DistrictModel } from './district.model';

/**
 * Generated class for the JobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job',
  templateUrl: 'job.html',
})
export class JobPage {
  job: Array<JobModel> = [];
  dataDistrict: DistrictModel = new DistrictModel();
  distaicts: string = "All";
  constructor(public navCtrl: NavController, public navParams: NavParams, public jobService: JobServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobPage');
    this.getOrder();
    this.getDistrict0();
  }
  getOrder() {
    this.jobService.getShop().then(data => {
      
      this.job = data;
      
      console.log(this.job);
    });
  }

  getDistrict0(){
    this.jobService.getDistrict().then(data => {
      
      this.dataDistrict = data;
      
      console.log(this.dataDistrict);
    });
  }
  gotojobdetail(){
    this.navCtrl.push(JobdetailPage);
  }
}
