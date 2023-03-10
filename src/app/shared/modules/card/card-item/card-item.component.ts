import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { FoodWithAmountInterface } from 'src/app/shared/types/types';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthsService } from 'src/app/service/auth.service';
import { FoodServiceService } from 'src/app/service/food-service.service';
import { ProductModalComponent } from '../../product-modal/product-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { switchMap, take } from 'rxjs';

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
  role = 'client';

  @Output() deletedProduct: EventEmitter<string> = new EventEmitter();
  @Output() updatedProduct: EventEmitter<string> = new EventEmitter();

  constructor(
    private cartService: CartService,
    private router: Router,
    private snackBar: MatSnackBar,
    private authsService: AuthsService,
    private foodServiceService: FoodServiceService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.authsService.user$.subscribe((user) => {
      this.role = user?.role ? user?.role : 'client';
    });
  }

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

  handleEdit(id: string) {
    this.foodServiceService
      .getFoodItemById(id)
      .pipe(
        take(1),
        switchMap((food) => {
          return this.matDialog
            .open(ProductModalComponent, {
              height: '720px',
              width: '900px',
              data: {
                type: 'edit',
                food,
              },
            })
            .afterClosed();
        })
      )
      .subscribe((data) => {
        if (data) {
          this.updatedProduct.emit(data);
        }
      });
  }

  deleteProduct(id: string) {
    this.deletedProduct.emit(id);
  }
}
