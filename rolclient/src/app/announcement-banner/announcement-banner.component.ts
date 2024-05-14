import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement-banner',
  templateUrl: './announcement-banner.component.html',
  styleUrls: ['./announcement-banner.component.css']
})
export class AnnouncementBannerComponent implements OnInit {
  remainingTime: string;

  ngOnInit() {
    this.updateRemainingTime();
    setInterval(() => this.updateRemainingTime(), 1000); // Update every second
  }

  private _getNextSunday(): Date {
    let now = new Date();
    let nextSunday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + ((7 - now.getDay()) % 7));
    nextSunday.setHours(9, 0, 0, 0); // Sunday 9 AM
    return nextSunday;
  }

  private _isCurrentTimeBetween(startTime: Date, endTime: Date): boolean {
    const now = new Date();
    return now >= startTime && now <= endTime;
  }

  updateRemainingTime(): void {
    const now = new Date();
    const nextSunday = this._getNextSunday();

    // Check if the current time is between 9 AM and 10 AM on Sunday
    const endSundayService = new Date(nextSunday.getTime());
    endSundayService.setHours(10);

    if (this._isCurrentTimeBetween(nextSunday, endSundayService)) {
      this.remainingTime = 'Tune in now to watch live! - <a href="/live" target="_blank">Watch Live</a>';
    } else {
      // Calculate the time difference to next Sunday 9 AM
      const diff = nextSunday.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.remainingTime = `${days} days, ${hours} hours, and ${minutes} minutes left until the next Sunday Service.`;
    }
  }
}
