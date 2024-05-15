import { Component } from '@angular/core';

interface BackgroundImage {
  url: string;
  type: string;
  left: string;
}

interface Subtitle {
  date: string;
  authors: string[] | string;
}

interface MediaItem {
  title: string;
  url: string;
  subtitle: Subtitle;
}

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.css']
})
export class LivestreamComponent {
  backgroundGradientImage: BackgroundImage = {
    url: 'linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)',
    type: 'gradient',
    left: '0'
  }

  mediaItems: MediaItem[] = [
    {
      title: 'Easter Sunday Service',
      url: 'https://www.youtube.com/live/o1yhyt_H0wU?si=AdLD8NaOW-6Eev6e',
      subtitle: { date: 'March 31, 2024', authors: 'Bishop Clifton Edwards Jr.' }
    },
    {
      title: 'Strengthen the Core in 24 (Part Four)',
      url: '/media/xdkphr2/strengthen-the-core-in-24-part-four',
      subtitle: { date: 'Jan 28, 2024', authors: ['Pastor Chris Phillips', 'Pastor Miriam Phillips'] }
    },
    {
      title: 'Strengthen the Core in 24 (Part Three)',
      url: '/media/72phfvb/strengthen-the-core-in-24-part-three',
      subtitle: { date: 'Jan 21, 2024', authors: 'Pastor Chris Phillips' }
    }
  ];
}
