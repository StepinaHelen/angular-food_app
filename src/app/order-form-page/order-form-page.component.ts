import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { FormComponent } from './components/form/form.component';
import { IOrdersHistoryItem } from '../shared/types/types';
import { OrderHistoryService } from 'src/app/service/order-history-service.service';
import { Router } from '@angular/router';
import { validateAllFormFields } from '../shared/helpers/form.helpers';

@Component({
  selector: 'food-order-form-page',
  templateUrl: './order-form-page.component.html',
  styleUrls: ['./order-form-page.component.scss'],
})
export class OrderFormPageComponent implements OnInit, OnDestroy {
  @ViewChild('orderForm') myForm: FormComponent;

  orderList: IOrdersHistoryItem[];
  destroyed$: Subject<boolean> = new Subject();

  constructor(
    private orderHistoryService: OrderHistoryService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService
      .getCartData()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.orderList = data.items;
      });
  }

  submitHandler() {
    if (this.myForm.orderForm.valid) {
      this.orderHistoryService.addOrderItemToHistory({
        ...this.myForm.orderForm.getRawValue(),
        date: new Date().toString(),
        foods: this.orderList,
      });
      this.cartService.clearCart();
      this.myForm.orderForm.reset();
      this.router.navigate(['/order-history']);
    } else {
      validateAllFormFields(this.myForm.orderForm);

      return;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
