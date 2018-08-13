import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from "../providers/auth";
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';
  pages: Array<{title: string, component: any, icon: any}>;
  user:any;

  constructor(
      public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      public auth: AuthProvider,
      private storage: Storage,
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Rede', component: 'HomePage', icon: 'home' },
      { title: 'Aracati', component: 'AracatiPage', icon: 'document' },
      { title: 'Cariri', component: 'CaririPage', icon: 'paper' },
      { title: 'Conta', component: 'SettingsPage', icon: 'settings' },
      { title: 'Login', component: 'LoginPage', icon: 'log-in' },
      { title: 'Register', component: 'RegisterPage', icon: 'paper' },
    ];

  }

  initializeApp() {
    this.auth.user().then(user => {
      this.user = user;
    });
    this.storage.get('notification').then((val) => {
        console.log('Your age is', val);
        if(val == 'active'){
            console.log('User active notifications');
        }else{
            console.log('User inactive receive notifications');
        }
    });
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
