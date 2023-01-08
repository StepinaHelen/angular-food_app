import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodServiceService } from 'src/app/service/food-service.service';
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

  constructor(private foodServiceService: FoodServiceService) {}

  ngOnInit(): void {
    this.ordersHistory$ = this.foodServiceService.getHistoryOrderItem();
  }
}
