import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodWithAmountInterface } from 'src/app/shared/types/types';

@Component({
  selector: 'food-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  isCart = this.router.url === '/cart';
  constructor(private router: Router) {}

  @Input()
  foods: FoodWithAmountInterface[] = [];

  ngOnInit(): void {}
}
