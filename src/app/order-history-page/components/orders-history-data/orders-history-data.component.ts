import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHistoryService } from 'src/app/service/order-history-service.service';
import {
  IOrdersHistoryItem,
  IOrderItemsHistory,
} from 'src/app/shared/types/types';

@Component({
  selector: 'foods-orders-history-data',
  templateUrl: './orders-history-data.component.html',
  styleUrls: ['./orders-history-data.component.scss'],
})
export class OrdersHistoryDataComponent implements OnInit {
  ordersHistory$: Observable<IOrderItemsHistory[]>;

  constructor(private orderHistoryService: OrderHistoryService) {}

  ngOnInit(): void {
    this.ordersHistory$ = this.orderHistoryService.getHistoryOrderItem();
  }
}
