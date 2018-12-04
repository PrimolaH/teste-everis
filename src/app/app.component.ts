
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
//import { IntroPageModule } from '../pages/intro/intro.module';

@Component({
  templateUrl: 'app.html',
  providers: [

  ]
})
export class MyApp {
  rootPage:any = HomePage;
  //rootPage: any ='FilmesPage';

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.rootPage = TabsPage;

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}