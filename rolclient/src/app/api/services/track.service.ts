import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../enviroments/environment";
import {Observable} from "rxjs";
import {ContactFormEntry} from "../interfaces/contact-form-entry";
import {Track} from "../interfaces/track";

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  public getAllTracksService(): Observable<Track[]> {
    return this.http
      .get<Track[]>(`${this.apiUrl}/v1/tracks/all`)
  }
  public getByTrackIdService(trackId: number): Observable<Track> {
    return this.http
      .get<Track>(`${this.apiUrl}/v1/tracks/find/${trackId}`)
  }
  public createNewTrackService(createTrack: ContactFormEntry): Observable<Track> {
    return this.http
      .post<Track>(`${this.apiUrl}/v1/tracks/add`, createTrack)
  }
  public updateTrackService(trackUpdate: ContactFormEntry): Observable<Track> {
    return this.http
      .put<Track>(`${this.apiUrl}/v1/tracks/update`, trackUpdate)
  }
  public deleteByTrackIdService(trackId: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/v1/tracks/delete/${trackId}`)
  }

  constructor(private http: HttpClient) { }
  private apiUrl: string = environment.apiUrl;
}
