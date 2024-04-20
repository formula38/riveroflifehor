import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs";
import {TrackService} from "../../../api/services/track.service";
import {Track} from "../../../api/interfaces/track";

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  tracks: Track[];

  constructor(private trackService: TrackService,
              private route: ActivatedRoute,
              private router: Router) {
    this.onGetTracks();
  }

  ngOnInit(): void {}

  onGetTracks() {
    this.trackService.getAllTracksService()
      .pipe(tap(tracks => {
            console.log(tracks);
            this.tracks = tracks;
          })).subscribe();
  }

  onNewTrack() {
    this.router.navigate(
      ['new'],
      {relativeTo: this.route}
    );
  }
}
