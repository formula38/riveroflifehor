import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {tap} from "rxjs/operators";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TrackService} from "../../../api/services/track.service";
import {Track} from "../../../api/interfaces/track";

@Component({
  selector: 'app-track-edit',
  templateUrl: './track-edit.component.html',
  styleUrls: ['./track-edit.component.css']
})
export class TrackEditComponent implements OnInit {
  track: Track;
  id: number;
  editMode = false;
  trackForm: FormGroup;

  constructor(private trackService: TrackService,
              private route: ActivatedRoute,
              private router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(param => {
          this.id = +param['id'];
          this.editMode = param['id'] != null;
          this.initForm();
        });

  }

  onSubmit() {
    if (this.editMode) {
      this.trackService.updateTrackService(this.trackForm.value)
        .pipe(tap(track => {
          this.track = track;
        })).subscribe();
    } else {
      this.trackService.createNewTrackService(this.trackForm.value)
        .pipe(tap(newTrack => {
          this.track = newTrack
        })).subscribe();
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(
      ['../'],
      {relativeTo: this.route}
    );
  }

  private async initForm() {
    let trackId: number;
    let trackName = '';
    let trackImageUrl = '';
    let trackUrl = '';
    let trackLength = 0;

    let trackArtist = new FormArray([]);

    if (this.editMode) {
      const track = await this.trackService
        .getByTrackIdService(this.id).toPromise();

      trackId = track?.trackId;
      trackName = track?.trackName;
      trackImageUrl = track?.trackImageUrl;
      trackUrl = track?.trackUrl;
      trackLength = track?.trackLength;

    }

    this.trackForm = new FormGroup({
      id: new FormControl(trackId),
      trackName: new FormControl(trackName),
      trackImageUrl: new FormControl(trackImageUrl),
      trackUrl: new FormControl(trackUrl),
      trackLength: new FormControl(trackLength),
      'artist': trackArtist
    });
  }
}
