import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.css'
})
export class SocialLinkComponent {
  @Input() class!: string;
  @Input() icon!: string;

}
