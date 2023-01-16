import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { FoodWithAmountInterface } from 'src/app/shared/types/types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'food-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input()
  food: FoodWithAmountInterface | null = null;
  public foodAmount: number = 1;
  isCart = this.router.url === '/cart';

  constructor(
    private cartService: CartService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

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

    this.snackBar.open(this.food.title + ' add to your Cart', 'Close', {
      duration: 2 * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });

    this.foodAmount = 1;
  }
}
