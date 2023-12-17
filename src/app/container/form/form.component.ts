import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // TODO: create and add custom validators (valid date and past date)
  bdForm: FormGroup = this.fb.group({
    day: ["", [Validators.required, Validators.min(1), Validators.max(31), Validators.minLength(2), Validators.maxLength(2)]],
    month: ["", [Validators.required, Validators.min(1), Validators.max(12), Validators.minLength(2), Validators.maxLength(2)]],
    year: ["", [Validators.required, Validators.min(0), Validators.minLength(4), Validators.maxLength(4)]]
  });;

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
}
