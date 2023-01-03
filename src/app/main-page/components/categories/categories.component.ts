import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  CATEGORIES = [
    'All',
    'Pizza',
    'Sushi',
    'Drinks',
    'Noodles',
    'Roles',
    'Salads',
  ];
  constructor() {}

  ngOnInit(): void {}
}
