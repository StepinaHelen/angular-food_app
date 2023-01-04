import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../../shared/constants';

@Component({
  selector: 'food-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: string[] = CATEGORIES;
  constructor() {}

  ngOnInit(): void {}
}
