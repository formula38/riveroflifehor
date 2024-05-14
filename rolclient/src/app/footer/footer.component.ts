import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  sections = [
    {
      title: 'About',
      content: 'A vibrant, multicultural sanctuary united in the transformative force of the Gospel to uplift and change lives.',
      colClass: 'sp-col-8'
    },
    {
      title: 'Service Times',
      content: 'Sundays at 9am<br>Wednesdays at 6pm (online)',
      colClass: 'sp-col-7'
    },
    {
      title: 'Contact Info',
      content: '(916) 692-5912<br>Sacramento, CA',
      colClass: 'sp-col-4'
    },
    {
      title: 'Get Connected',
      content: `
      <a class="facebook" href="https://www.facebook.com/riveroflifehor" target="_blank"><i class="fa fa-fw fa-facebook"></i></a>
      <a class="twitter" href="#" target="_blank"><i class="fa fa-fw fa-twitter"></i></a>
      <a class="instagram" href="#" target="_blank"><i class="fa fa-fw fa-instagram"></i></a>
      <a class="youtube" href="https://www.youtube.com/channel/UC-iNqiJoUGqtfLvjI8-n23g" target="_blank"><i class="fa fa-fw fa-youtube"></i></a>
    `,
      colClass: 'sp-col-5'
    }
  ];

}
