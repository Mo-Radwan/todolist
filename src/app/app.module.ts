import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthenticationService } from "./../app/shared/authentication-service";

export const firebaseConfig = {
  apiKey: "AIzaSyB5Nhot-FimDbtodK7ImPm2P_LrmeFOsrE",
  authDomain: "todolist-dd722.firebaseapp.com",
  databaseURL: "https://todolist-dd722.firebaseio.com",
  projectId: "todolist-dd722",
  storageBucket: "todolist-dd722.appspot.com",
  messagingSenderId: "1015606251105",
  appId: "1:1015606251105:web:f009f95514910621d2a420",
  measurementId: "G-KSVF5M9FR8"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthenticationService,
    AngularFirestoreModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
