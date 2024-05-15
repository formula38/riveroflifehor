import { Component, OnInit } from '@angular/core';
import { ContactFormEntryService } from '../../../api/services/contact-form-entry.service';
import { ContactFormEntry } from '../../../api/interfaces/contact-form-entry';
import { tap } from 'rxjs';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: ContactFormEntry[];

  constructor(private contactFormEntryService: ContactFormEntryService) {}

  ngOnInit(): void {
    this.onGetContactFormEntries();
  }

  onGetContactFormEntries(): void {
    this.contactFormEntryService.getAllEntries()
      .pipe(tap(entries => this.entries = entries))
      .subscribe();
  }
}
