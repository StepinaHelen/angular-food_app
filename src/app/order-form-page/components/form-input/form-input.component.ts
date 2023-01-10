import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input()
  inputId: string;

  @Input()
  control: FormControl = new FormControl();

  @Input()
  label: string = '';

  generateErrors(controlErrors: ValidationErrors | null, key: string) {
    const errors: Record<string, string> = {
      required: 'The field is required',
      minlength: `The minimum length for this field is ${controlErrors?.['minlength']?.requiredLength}`,
      pattern: 'The field is not valid',
    };
    return errors[key];
  }

  constructor() {}

  ngOnInit(): void {}
}
