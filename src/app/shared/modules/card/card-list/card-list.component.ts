import { Component, OnInit, Input } from '@angular/core';
import {
  FoodInterface,
  FoodWithAmountInterface,
} from 'src/app/shared/types/types';
import { Router } from '@angular/router';
@Component({
  selector: 'food-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  isCart = this.router.url === '/cart';
  constructor(private router: Router) {}

  @Input()
  foods: FoodWithAmountInterface[] = [];

  ngOnInit(): void {}

  cartStyling() {
    return { 'cart-layout': this.isCart };
  }
}
