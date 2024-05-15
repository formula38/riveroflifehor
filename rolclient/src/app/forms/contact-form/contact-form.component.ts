import { Component, OnInit } from '@angular/core';
import { tap } from "rxjs";
import { FormControl, FormGroup } from "@angular/forms";
import { ContactFormEntryService } from "../../api/services/contact-form-entry.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ContactFormEntry } from "../../api/interfaces/contact-form-entry";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  contractFormEntry: ContactFormEntry;
  id: number;
  editMode = false;

  constructor(
    private contactFromEntryService: ContactFormEntryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id'];
      this.editMode = param['id'] != null;
      this.initForm();
    });
  }

  onCancel() {
    this.router.navigate(['/thank-you'], { relativeTo: this.route });
  }

  onSubmit() {
    if (this.editMode) {
      this.contactFromEntryService.updateEntry(this.contactForm.value).pipe(
        tap(entry => {
          this.contractFormEntry = entry;
        })
      ).subscribe();
    } else {
      this.contactFromEntryService.createNewEntry(this.contactForm.value).pipe(
        tap(newEntry => {
          this.contractFormEntry = newEntry;
        })
      ).subscribe();
    }
    this.onCancel();
  }

  private async initForm() {
    let entryId: number;
    let firstName: string;
    let lastName: string;
    let email: string;
    let message: string;

    if (this.editMode) {
      const entry = await this.contactFromEntryService.getByEntryId(this.id).toPromise();
      entryId = entry.entryId;
      firstName = entry.firstName;
      lastName = entry.lastName;
      email = entry.email;
      message = entry.message;
    }

    this.contactForm = new FormGroup({
      entryId: new FormControl(entryId),
      firstName: new FormControl(firstName),
      lastName: new FormControl(lastName),
      email: new FormControl(email),
      message: new FormControl(message)
    });
  }
}
