import { AgreementPage } from './../pages/agreement/agreement';
import { RegisterStep5Page } from './../pages/register-step5/register-step5';
import { RegisterStep4Page } from './../pages/register-step4/register-step4';
import { RegisterStep3Page } from './../pages/register-step3/register-step3';
import { RegisterStep2Page } from './../pages/register-step2/register-step2';
import { LoginPage } from './../pages/login/login';
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
import { RegisterStep1Page } from '../pages/register-step1/register-step1';
import { NearbyPage } from '../pages/nearby/nearby';
import { GreetingPage } from '../pages/greeting/greeting';
<<<<<<< HEAD
import { NearbyServiceProvider } from '../providers/nearby-service/nearby-service';
=======
import { RegisterStep6Page } from '../pages/register-step6/register-step6';
>>>>>>> 0c2da49bce19128947cfd51934ea4648329d9b81

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
    JobdetailPage,
    LoginPage,
    NearbyPage,
    RegisterStep1Page,
    RegisterStep2Page,
    RegisterStep3Page,
    RegisterStep4Page,
    RegisterStep5Page,
    RegisterStep6Page,
    GreetingPage,
    AgreementPage
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
    JobdetailPage,
    LoginPage,
    NearbyPage,
    RegisterStep1Page,
    RegisterStep2Page,
    RegisterStep3Page,
    RegisterStep4Page,
    RegisterStep5Page,
    RegisterStep6Page,
    GreetingPage,
    AgreementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JobServiceProvider,
    JobdetailProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NearbyServiceProvider
  ]
})
export class AppModule { }
