import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../enviroments/environment";
import {Observable} from "rxjs";
import {ContactFormEntry} from "../interfaces/contact-form-entry";

@Injectable({
  providedIn: 'root'
})
export class ContactFormEntryService {

  public getAllEntries(): Observable<ContactFormEntry[]> {
    return this.http
      .get<ContactFormEntry[]>(`${this.apiUrl}/v1/contact-form/all`)
  }
  public getByEntryId(entryId: number): Observable<ContactFormEntry> {
    return this.http
      .get<ContactFormEntry>(`${this.apiUrl}/v1/contact-form/find/${entryId}`)
  }
  public createNewEntry(createEntry: ContactFormEntry): Observable<ContactFormEntry> {
    return this.http
      .post<ContactFormEntry>(`${this.apiUrl}/v1/contact-form/add`, createEntry)
  }
  public updateEntry(entryUpdate: ContactFormEntry): Observable<ContactFormEntry> {
    return this.http
      .put<ContactFormEntry>(`${this.apiUrl}/v1/contact-form/update`, entryUpdate)
  }
  public deleteByEntryId(entryId: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/v1/contact-form/delete/${entryId}`)
  }

  constructor(private http: HttpClient) { }
  private apiUrl: string = environment.apiUrl;
}
