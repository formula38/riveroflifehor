import {Component, OnInit} from '@angular/core';
import {ContactFormEntryService} from "../../api/services/contact-form-entry.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {tap} from "rxjs";
import {ContactFormEntry} from "../../api/interfaces/contact-form-entry";

@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.css']
})
export class MissionVisionComponent implements OnInit{

  onCancel() {
    this.router.navigate(
      ['../'],
      {relativeTo: this.route}
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.contactFromEntryService.updateEntry(this.contactForm.value)
        .pipe(tap(entry => {
          this.contractFormEntry = entry;
        })).subscribe();
    } else {
      this.contactFromEntryService.createNewEntry(this.contactForm.value)
        .pipe(tap(newEntry => {
          this.contractFormEntry = newEntry;
        })).subscribe();
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
      const entry = await this.contactFromEntryService
        .getByEntryId(this.id).toPromise();

      entryId = entry.entryId;
      firstName = entry.firstName;
      lastName = entry.lastName;
      email = entry.email;
      message = entry.message;

    }

    this.contactForm = new FormGroup<any>({
      entryId: new FormControl(entryId),
      firstName: new FormControl(firstName),
      lastName: new FormControl(lastName),
      email: new FormControl(email),
      message: new FormControl(message)
    })
  }


  constructor(private contactFromEntryService: ContactFormEntryService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  contractFormEntry: ContactFormEntry;
  contactForm: FormGroup;
  id: number;
  editMode = false;

  ngOnInit(): void {
    this.route.params
      .subscribe(param => {
        this.id = param['id'];
        this.editMode = param['id'] != null;
        this.initForm();
      })
  }

}
