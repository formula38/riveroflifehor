import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-announcement-banner',
  templateUrl: './announcement-banner.component.html',
  styleUrls: ['./announcement-banner.component.css']
})
export class AnnouncementBannerComponent implements OnInit, OnDestroy {
  remainingTime: string = '';
  countdownInterval: any;

  ngOnInit() {
    this.updateRemainingTime();
    this.countdownInterval = setInterval(() => this.updateRemainingTime(), 1000);
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  updateRemainingTime() {
    const now = new Date();
    const nextSunday9am = this.getNextSunday9am(now);
    const timeDifference = nextSunday9am.getTime() - now.getTime();

    if (timeDifference <= 0) {
      this.remainingTime = 'Tune in now to watch live! - <a href="/live">Click here</a>';
      setTimeout(() => {
        this.startCountdown();
      }, 60 * 60 * 1000); // 1 hour in milliseconds
    } else {
      this.remainingTime = this.formatTimeDifference(timeDifference);
    }
  }

  getNextSunday9am(now: Date): Date {
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7);
    nextSunday.setHours(9, 0, 0, 0); // 9 AM
    return nextSunday;
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => this.updateRemainingTime(), 1000);
  }

  formatTimeDifference(diff: number): string {
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  }
}
