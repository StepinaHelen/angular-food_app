import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CATEGORIES } from '../../constants';

@Component({
  selector: 'food-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss'],
})
export class SelectFormComponent implements OnInit {
  categories = CATEGORIES.slice(1, CATEGORIES.length);
  @Input()
  control: FormControl = new FormControl();

  @Input()
  label: string = '';

  constructor() {}

  ngOnInit(): void {}
}
