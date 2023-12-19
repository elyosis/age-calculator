import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  bdForm: FormGroup = this.fb.group({
    day: ["", [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1), Validators.max(31), Validators.minLength(2), Validators.maxLength(2)]],
    month: ["", [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1), Validators.max(12), Validators.minLength(2), Validators.maxLength(2)]],
    year: ["", [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0), Validators.minLength(4), Validators.maxLength(4)]]
  }, { validators: [this.futureDateValidator, this.validDateValidator] });

  formWideError!: boolean;

  constructor(private fb: FormBuilder) { }

  onSubmit(form: any): void {
    if (this.bdForm.status === "INVALID") {
      return;
    } else {
      console.log("Submitted");
    }
    /* TODO: once validated, data should be passed
      up to the container through an event emitter  
      */
  }

  validDateValidator(control: AbstractControl): ValidationErrors | null {
    const day = control.get("day");
    const month = control.get("month");
    const year = control.get("year");

    const dateString = `${year?.value}-${month?.value}-${day?.value}`
    const inputDate = new Date(dateString);

    /* A date object created from data for a day that doesn't exist
    will instead return the first valid date in the following month
    so asking for the 31st of April returns the 1st of May

    So we check if the month inside the created date object (+1 to account for JS date formatting)
    matches the month we were given as the input */
    let inputMonth = (inputDate.getMonth() + 1).toString();
    // The return format for getMonth() differs from the one for the input
    // so we add an extra 0 for single number months
    if (inputMonth.length === 1) { inputMonth = `0${inputMonth}`; }

    // If the months don't match, the input date doesn't exist
    return inputMonth === month?.value ? null : { invalidDate: true }
  }

  futureDateValidator(control: AbstractControl): ValidationErrors | null {
    const day = control.get("day");
    const month = control.get("month");
    const year = control.get("year");

    // Create a date object with the input we're given
    const dateString = `${year?.value}-${month?.value}-${day?.value}`
    const inputDate = new Date(dateString);
    // Also create a date object with the current time
    const currentDate = new Date();

    // Check if the input date is further in time than the current one
    return inputDate > currentDate ? { futureDate: true } : null
  }
}
