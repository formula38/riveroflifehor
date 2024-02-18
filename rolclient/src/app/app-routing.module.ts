import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BiographyComponent} from "./biography/biography.component";
import {ChurchHistoryComponent} from "./church-history/church-history.component";
import {PhotoAlbumComponent} from "./photo-album/photo-album.component";
import {PrayerRequestComponent} from "./prayer-request/prayer-request.component";
import {ServiceInfoComponent} from "./service-info/service-info.component";
import {GiveComponent} from "./give/give.component";
import {WatchLiveComponent} from "./watch-live/watch-live.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: BiographyComponent},
  {path: 'history-and-info', component: ChurchHistoryComponent},
  {path: 'photos', component: PhotoAlbumComponent},
  {path: 'prayer-request', component: PrayerRequestComponent},
  {path: 'services-and-location', component: ServiceInfoComponent},
  {path: 'give-popup', component: GiveComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'live-stream', component: WatchLiveComponent},
  {path: 'privacy', component: PrivacyPolicyComponent},

  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: {message: 'page not found!'}
  },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
