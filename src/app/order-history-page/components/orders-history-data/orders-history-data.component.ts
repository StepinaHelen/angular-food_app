import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthsService } from 'src/app/service/auth.service';
import { OrderHistoryService } from 'src/app/service/order-history-service.service';
import { IOrderItemsHistory } from 'src/app/shared/types/types';

@Component({
  selector: 'foods-orders-history-data',
  templateUrl: './orders-history-data.component.html',
  styleUrls: ['./orders-history-data.component.scss'],
})
export class OrdersHistoryDataComponent implements OnInit {
  ordersHistory$: Observable<IOrderItemsHistory[]>;

  constructor(
    private orderHistoryService: OrderHistoryService,
    private authsService: AuthsService
  ) {}

  ngOnInit(): void {
    if (this.authsService.userId) {
      this.ordersHistory$ = this.orderHistoryService.getHistoryOrderItem(
        this.authsService.userId
      );
    }
  }
}
