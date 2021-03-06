import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CoreModule} from './@core/core.module';
import {SharedModule} from './@shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VKAuthWeb} from 'capacitor-plugin-vk-auth';
// import {LocationStrategy} from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        CoreModule,
        SharedModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        VKAuthWeb,
        // {
        //     provide: LocationStrategy,
        //     useClass: IonicRouteStrategy
        // },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
