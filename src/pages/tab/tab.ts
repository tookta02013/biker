import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs } from 'ionic-angular';
import { MyWalletPage } from '../my-wallet/my-wallet';
import { HistoryPage } from '../history/history';
import { JobPage } from '../job/job';
import { StatusPage } from '../status/status';
import { MorePage } from '../more/more';
import { NearbyPage } from '../nearby/nearby';

/**
 * Generated class for the TabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {
  @ViewChild('myTabs') tabRef: Tabs;
  myWalletRoot = MyWalletPage;
  nearbyRoot = NearbyPage;
  jobRoot = JobPage;
  statusRoot = StatusPage;
  moreRoot = MorePage;


  constructor(public navCtrl: NavController) {

  }
  ordertab(){
    this.tabRef.select(2);
  }
  getSelectedTab(){
    let tab = window.localStorage.getItem('tabtabtabtab') ? window.localStorage.getItem('tabtabtabtab') : 0;
    return tab;
  }

}
