import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'food-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  @Input()
  control: FormControl = new FormControl();

  @Input()
  label: string = '';

  @Input()
  type: string = 'text';

  generateErrors(controlErrors: ValidationErrors | null, key: string) {
    const errors: Record<string, string> = {
      required: 'The field is required',
      minlength: `The minimum length for this field is ${controlErrors?.['minlength']?.requiredLength}`,
      pattern: 'The field is not valid',
      match: 'Field Password and Confirm Password must to be equal',
      email: 'Invalid email address',
    };
    return errors[key];
  }

  constructor() {}

  ngOnInit(): void {}
}
