import {tap} from "rxjs";
import { Component, OnInit } from '@angular/core';

import {Track} from "../../../api/interfaces/track";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TrackService} from "../../../api/services/track.service";

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.css']
})
export class TrackDetailsComponent implements OnInit {
  track : Track;
  id : number;

  constructor(private trackService: TrackService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (param: Params) => {
          this.id = +param['id'];
          this.trackService.getByTrackIdService(this.id)
            .pipe(tap(
                (track: Track) => {
                  this.track = track;})
            ).subscribe();
        }
      );
  }

  onAddToProject() {
    // TODO:

  }

  onEditTrack() {
    this.router.navigate(
      ['edit'],
      {relativeTo: this.route}
    );
  }

  onDeleteTrack() {
    this.trackService.deleteByTrackIdService(this.id)
      .subscribe();
    this.router.navigate(
      ['../'],
      {relativeTo: this.route}
    );
  }
}
