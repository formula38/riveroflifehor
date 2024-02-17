import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BiographyComponent } from './biography/biography.component';
import { ChurchHistoryComponent } from './church-history/church-history.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { ServiceInfoComponent } from './service-info/service-info.component';
import { PrayerRequestComponent } from './prayer-request/prayer-request.component';
import { GiveComponent } from './give/give.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { WatchLiveComponent } from './watch-live/watch-live.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BiographyComponent,
    ChurchHistoryComponent,
    PhotoAlbumComponent,
    ServiceInfoComponent,
    PrayerRequestComponent,
    GiveComponent,
    PrivacyPolicyComponent,
    WatchLiveComponent,
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
