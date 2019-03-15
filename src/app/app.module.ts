import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutUsPage } from '../pages/about-us/about-us';
import { ImpostazionePage } from '../pages/impostazione/impostazione';
import { PreferitiPage } from '../pages/preferiti/preferiti';
import { QrScanPage } from '../pages/qr-scan/qr-scan';
import { PercorsiPage } from '../pages/percorsi/percorsi';
import { QRScanner } from '@ionic-native/qr-scanner';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AboutUsPage,
    ImpostazionePage,
    PreferitiPage,
    QrScanPage,
    PercorsiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AboutUsPage,
    ImpostazionePage,
    PreferitiPage,
    QrScanPage,
    PercorsiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
