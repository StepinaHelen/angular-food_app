import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodInterface, FoodWithAmountInterface } from '../shared/types/types';
import { FoodServiceService } from 'src/app/service/food-service.service';

@Component({
  selector: 'food-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public $foods: Observable<FoodWithAmountInterface[]> = new Observable();

  constructor(private foodServiceService: FoodServiceService) {}

  ngOnInit(): void {
    this.$foods = this.foodServiceService.getFoodsList();
  }
}
