import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import {
  FoodInterface,
  FoodWithAmountInterface,
} from 'src/app/shared/types/types';

@Component({
  selector: 'food-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input()
  food: FoodWithAmountInterface | null = null;
  public foodAmount: number = 1;
  url = this.router.url;

  constructor(private cartService: CartService, private router: Router) {}

  decrement() {
    if (this.foodAmount === 1) {
      return;
    }
    this.foodAmount -= 1;
  }

  increment() {
    this.foodAmount += 1;
  }

  handleDelete() {
    this.cartService.removeFromCart(this.food?.id ?? '');
  }

  handleAdd() {
    if (!this.food) {
      return;
    }

    this.cartService.addToCart({ ...this.food, amount: this.foodAmount });

    this.foodAmount = 1;
  }

  ngOnInit(): void {}
}
