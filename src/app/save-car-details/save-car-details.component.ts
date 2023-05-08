import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-save-car-details',
  templateUrl: './save-car-details.component.html',
  styleUrls: ['./save-car-details.component.css']
})
export class SaveCarDetailsComponent {

  saveCarDetailsForm: FormGroup;
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  carStatus: FormControl = new FormControl('');

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: string[] = [];

  constructor() {
    this.saveCarDetailsForm = new FormGroup({
      title: this.title,
      description: this.description,
      carStatus: this.carStatus,
    })
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(value: string): void {
    const index = this.tags.indexOf(value);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

}
