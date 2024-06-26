import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GiveComponent } from './give/give.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MissionVisionComponent } from './about/mission-vision/mission-vision.component';
import { OurStoryComponent } from './about/our-story/our-story.component';
import { LeadershipComponent } from './about/leadership/leadership.component';
import { PraiseWorshipComponent } from './about/praise-worship/praise-worship.component';
import { LivestreamComponent } from './livestream/livestream.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { ChildrenComponent } from './grow/children/children.component';
import { GrowTimeClassesComponent } from './grow/grow-time-classes/grow-time-classes.component';
import { MarriageComponent } from './grow/marriage/marriage.component';
import { MenComponent } from './grow/men/men.component';
import { MilitaryComponent } from './grow/military/military.component';
import { RiverGroupsComponent } from './grow/river-groups/river-groups.component';
import { RiverWiseComponent } from './grow/river-wise/river-wise.component';
import { WomenComponent } from './grow/women/women.component';
import { YoungAdultsComponent } from './grow/young-adults/young-adults.component';
import { YouthComponent } from './grow/youth/youth.component';
import { EventsComponent } from './events/events.component';
import { ServeComponent } from './serve/serve.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './about/contact/contact.component';
import { AnnouncementBannerComponent } from './announcement-banner/announcement-banner.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { TyPageComponent } from './forms/ty-page/ty-page.component';
import { EntryListComponent } from './forms/entries/entry-list/entry-list.component';
import { ListEntryComponent } from './forms/entries/entry-list/list-entry/list-entry.component';
import { EntriesComponent } from './forms/entries/entries.component';
import { TrackListComponent } from './about/praise-worship/track-list/track-list.component';
import { TrackListEntryComponent } from './about/praise-worship/track-list/track-list-entry/track-list-entry.component';
import { TrackEditComponent } from './about/praise-worship/track-edit/track-edit.component';
import { TrackDetailsComponent } from './about/praise-worship/track-details/track-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SocialLinkComponent} from "./social-link/social-link.component";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GiveComponent,
    PrivacyPolicyComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    LogoComponent,
    GoogleMapComponent,
    MissionVisionComponent,
    OurStoryComponent,
    LeadershipComponent,
    PraiseWorshipComponent,
    LivestreamComponent,
    NextStepsComponent,
    ChildrenComponent,
    GrowTimeClassesComponent,
    MarriageComponent,
    MenComponent,
    MilitaryComponent,
    RiverGroupsComponent,
    RiverWiseComponent,
    WomenComponent,
    YoungAdultsComponent,
    YouthComponent,
    EventsComponent,
    ServeComponent,
    MemberLoginComponent,
    ErrorPageComponent,
    NavbarComponent,
    AnnouncementBannerComponent,
    ContactFormComponent,
    TyPageComponent,
    EntryListComponent,
    ListEntryComponent,
    EntriesComponent,
    TrackListComponent,
    TrackListEntryComponent,
    TrackEditComponent,
    TrackDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    SocialLinkComponent,
    NgbCollapse
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
