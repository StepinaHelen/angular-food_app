import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { OrderHistoryService } from 'src/app/service/order-history-service.service';
import { AuthsService } from '../service/auth.service';
import { validateAllFormFields } from '../shared/helpers/form.helpers';
import { IOrdersHistoryItem } from '../shared/types/types';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'food-order-form-page',
  templateUrl: './order-form-page.component.html',
  styleUrls: ['./order-form-page.component.scss'],
})
export class OrderFormPageComponent implements OnInit, OnDestroy {
  @ViewChild('orderForm') myForm: FormComponent;

  orderList: IOrdersHistoryItem[];
  destroyed$: Subject<boolean> = new Subject();
  isLoading: boolean = false;

  constructor(
    private orderHistoryService: OrderHistoryService,
    private cartService: CartService,
    private router: Router,
    private authsService: AuthsService
  ) {}

  ngOnInit(): void {
    this.cartService
      .getCartData()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.orderList = data.items;
      });
  }

  async submitHandler() {
    if (this.myForm.orderForm.valid) {
      this.isLoading = true;

      await this.orderHistoryService.addOrderItemToHistory(
        {
          ...this.myForm.orderForm.getRawValue(),
          date: new Date().toString(),
          foods: this.orderList,
        },
        this.authsService.token
      );

      this.isLoading = false;
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
