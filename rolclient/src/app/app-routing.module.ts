import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GiveComponent} from "./give/give.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {MissionVisionComponent} from "./about/mission-vision/mission-vision.component";
import {OurStoryComponent} from "./about/our-story/our-story.component";
import {LeadershipComponent} from "./about/leadership/leadership.component";
import {PraiseWorshipComponent} from "./about/praise-worship/praise-worship.component";
import {ContactComponent} from "./about/contact/contact.component";
import {LivestreamComponent} from "./livestream/livestream.component";
import {NextStepsComponent} from "./next-steps/next-steps.component";
import {ChildrenComponent} from "./grow/children/children.component";
import {GrowTimeClassesComponent} from "./grow/grow-time-classes/grow-time-classes.component";
import {MarriageComponent} from "./grow/marriage/marriage.component";
import {MenComponent} from "./grow/men/men.component";
import {MilitaryComponent} from "./grow/military/military.component";
import {RiverGroupsComponent} from "./grow/river-groups/river-groups.component";
import {RiverWiseComponent} from "./grow/river-wise/river-wise.component";
import {WomenComponent} from "./grow/women/women.component";
import {YoungAdultsComponent} from "./grow/young-adults/young-adults.component";
import {YouthComponent} from "./grow/youth/youth.component";
import {EventsComponent} from "./events/events.component";
import {ServeComponent} from "./serve/serve.component";
import {MemberLoginComponent} from "./member-login/member-login.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about',
    children:[
      {path: 'mission-vision', component: MissionVisionComponent},
      {path: 'our-story', component: OurStoryComponent},
      {path: 'leadership', component: LeadershipComponent},
      {path: 'praise-worship', component: PraiseWorshipComponent},
      {path: 'contact', component: ContactComponent},
    ]
  },
  {path: 'live', component: LivestreamComponent},
  {path: 'next-steps', component: NextStepsComponent},
  {path: 'grow',
    children:[
      {path: 'children', component: ChildrenComponent},
      {path: 'growtime', component: GrowTimeClassesComponent},
      {path: 'marriage', component: MarriageComponent},
      {path: 'men', component: MenComponent},
      {path: 'military', component: MilitaryComponent},
      {path: 'river-groups', component: RiverGroupsComponent},
      {path: 'riverwise', component: RiverWiseComponent},
      {path: 'women', component: WomenComponent},
      {path: 'rolya', component: YoungAdultsComponent},
      {path: 'youth', component: YouthComponent},
    ]
  },
  {path: 'events', component: EventsComponent},
  {path: 'give', component: GiveComponent},
  {path: 'serve', component: ServeComponent},
  {path: 'memberlogin', component: MemberLoginComponent},
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
