import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from '../service/cart.service';
import { FoodServiceService } from '../service/food-service.service';
import { FormComponent } from './components/form/form.component';
import { IOrdersHistoryItem } from '../shared/types/types';

@Component({
  selector: 'food-order-form-page',
  templateUrl: './order-form-page.component.html',
  styleUrls: ['./order-form-page.component.scss'],
})
export class OrderFormPageComponent implements OnInit, OnDestroy {
  @ViewChild('orderForm') myForm: FormComponent;
  constructor(
    private foodServiceService: FoodServiceService,
    private cartService: CartService
  ) {}
  orderList: IOrdersHistoryItem[];
  destroyed$: Subject<boolean> = new Subject();

  ngOnInit(): void {
    this.cartService
      .getCartItems()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.orderList = data;
      });
  }

  submitHandler() {
    this.foodServiceService.addOrderItemToHistory({
      ...this.myForm.orderForm.value,
      date: new Date().toString(),
      foods: this.orderList,
    });
    this.myForm.orderForm.reset();
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
