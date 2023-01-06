import { Component, OnInit, Input } from '@angular/core';
import {
  FoodInterface,
  FoodWithAmountInterface,
} from 'src/app/shared/types/types';

@Component({
  selector: 'food-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  constructor() {}

  @Input()
  foods: FoodWithAmountInterface[] | null = [];

  ngOnInit(): void {}
}
