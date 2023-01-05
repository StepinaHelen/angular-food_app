import { Component, OnInit, Input } from '@angular/core';
import { FoodInterface } from 'src/app/shared/types/types';

@Component({
  selector: 'food-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input()
  food: FoodInterface | null = null;
  public foodAmount: number = 1;

  decrement() {
    if (this.foodAmount === 1) {
      return;
    }
    this.foodAmount -= 1;
  }

  increment() {
    this.foodAmount += 1;
  }

  //TODO: Implement adding to cart
  handleAdd() {
    this.foodAmount = 1;
  }

  ngOnInit(): void {}
}
