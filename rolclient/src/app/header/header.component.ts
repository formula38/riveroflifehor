import { Component } from '@angular/core';
import {PraiseWorshipComponent} from "../about/praise-worship/praise-worship.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    protected readonly PraiseWorshipComponent = PraiseWorshipComponent;
}
