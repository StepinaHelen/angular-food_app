import { Component, Input, OnInit } from '@angular/core';
import { IOrdersHistoryItem } from '../../types/types';

@Component({
  selector: 'food-orders-items',
  templateUrl: './orders-items.component.html',
  styleUrls: ['./orders-items.component.scss'],
})
export class OrdersItemsComponent implements OnInit {
  @Input() foodItems: IOrdersHistoryItem[] = [];
  @Input() withShadow: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
