import { JobServiceProvider } from './../pages/job/job-service';
import { StatusPage } from './../pages/status/status';
import { JobPage } from './../pages/job/job';
import { HistoryPage } from './../pages/history/history';
import { MyWalletPage } from './../pages/my-wallet/my-wallet';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabPage } from '../pages/tab/tab';
import { HttpClientModule } from '@angular/common/http';
import { JobdetailPage } from '../pages/jobdetail/jobdetail';
import { JobdetailProvider } from '../pages/jobdetail/sevicejobdetail';
import { MorePage } from '../pages/more/more';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabPage,
    MyWalletPage,
    HistoryPage,
    JobPage,
    StatusPage,
    MorePage,
    JobdetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabPage,
    MyWalletPage,
    HistoryPage,
    JobPage,
    StatusPage,
    MorePage,
    JobdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JobServiceProvider,
    JobdetailProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
