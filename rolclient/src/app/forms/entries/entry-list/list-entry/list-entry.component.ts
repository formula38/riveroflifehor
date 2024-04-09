import {Component, Input, OnInit} from '@angular/core';
import {ContactFormEntry} from "../../../../api/interfaces/contact-form-entry";

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.css']
})
export class ListEntryComponent implements OnInit{

  ngOnInit() {}
  constructor() {}
  @Input() entry: ContactFormEntry;
}
