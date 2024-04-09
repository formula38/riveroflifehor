import {Component, OnInit} from '@angular/core';
import {ContactFormEntry} from "../../../api/interfaces/contact-form-entry";
import {ContactFormEntryService} from "../../../api/services/contact-form-entry.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit{

  onGetContactFromEntries() {
    this.contactFormEntryService.getAllEntries()
      .pipe(tap(entries => {
        this.entries = entries;
      })).subscribe();
  }

  ngOnInit() {}
  constructor(private contactFormEntryService: ContactFormEntryService) {
    this.onGetContactFromEntries();
  }
  entries: ContactFormEntry[];
}
