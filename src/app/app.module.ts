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
import{} from 'google-maps';
import { HttpClientModule } from '@angular/common/http';
import { DettaglioPostiPage } from '../pages/dettaglio-posti/dettaglio-posti';
import { ChiSiamoPage } from '../pages/chi-siamo/chi-siamo';
import { ContattiPage } from '../pages/contatti/contatti';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { ListaLuoghiPage } from '../pages/lista-luoghi/lista-luoghi';
import { Page3Page } from '../pages/page3/page3';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AboutUsPage,
    ImpostazionePage,
    PreferitiPage,
    QrScanPage,
    PercorsiPage,
    DettaglioPostiPage,
    ChiSiamoPage,
    ContattiPage,
    Page1Page,
    Page2Page,
    Page3Page,
    ListaLuoghiPage
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
    TabsPage,
    AboutUsPage,
    ImpostazionePage,
    PreferitiPage,
    QrScanPage,
    PercorsiPage,
    DettaglioPostiPage,
    ChiSiamoPage,
    ContattiPage,
    Page1Page,
    Page2Page,
    Page3Page,
    ListaLuoghiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
