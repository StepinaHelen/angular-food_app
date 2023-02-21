import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { generateErrors } from '../../helpers/form.helpers';

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

  handleErrors(controlErrors: ValidationErrors | null, key: string) {
    return generateErrors(controlErrors, key);
  }

  constructor() {}

  ngOnInit(): void {}
}
