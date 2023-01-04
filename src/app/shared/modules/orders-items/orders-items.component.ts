import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food-orders-items',
  templateUrl: './orders-items.component.html',
  styleUrls: ['./orders-items.component.scss'],
})
export class OrdersItemsComponent implements OnInit {
  elements = [
    { price: 10, title: 'pizza', amount: 2 },
    { price: 10, title: 'pizza', amount: 2 },
    { price: 10, title: 'pizza', amount: 2 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
