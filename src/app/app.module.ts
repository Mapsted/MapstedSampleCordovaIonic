import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MapstedAwesomeCordovaPlugin } from 'mapsted-awesome-cordova-plugin/ngx';
import { FirebaseCrash } from '@awesome-cordova-plugins/firebase-crash/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MapstedAwesomeCordovaPlugin,FirebaseCrash],
  bootstrap: [AppComponent],
})
export class AppModule {}
