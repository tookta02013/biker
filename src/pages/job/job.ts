import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JobServiceProvider } from './job-service';
import { JobModel } from './job.model';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public jobService: JobServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobPage');
    this.getOrder();
  }
  getOrder() {
    this.jobService.getShop().then(data => {
      
      this.job = data;
      
      console.log(this.job);
    });
  }
}
