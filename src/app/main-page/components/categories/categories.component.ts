import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CATEGORIES } from '../../../shared/constants';
import { OrderByDirection } from 'firebase/firestore';

@Component({
  selector: 'food-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: string[] = CATEGORIES;
  sort: OrderByDirection;

  @Output() selectedCategory = new EventEmitter<string>;
  @Output() sortItems = new EventEmitter<OrderByDirection>;

  constructor() { }

  ngOnInit(): void { }

  chooseCategory(category: string): void {
    this.selectedCategory.emit(category.toLowerCase())
  }

  sortItem(): void {
    if (this.sort === "desc") {
      this.sort = "asc"
    }
    else {
      this.sort = "desc"
    }
    this.sortItems.emit(this.sort);
  }
}
