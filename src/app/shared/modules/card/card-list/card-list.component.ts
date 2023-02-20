import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodServiceService } from 'src/app/service/food-service.service';
import { FoodWithAmountInterface } from 'src/app/shared/types/types';

@Component({
  selector: 'food-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  isCart = this.router.url === '/cart';
  constructor(
    private router: Router,
    private foodServiceService: FoodServiceService
  ) {}

  @Input()
  foods: FoodWithAmountInterface[] = [];

  ngOnInit(): void {}

  delete(id: string) {
    this.foodServiceService.deleteFoodItem(id);
    this.foods = this.foods.filter((food) => food.id !== id);
  }

  update(product: any) {
    this.foods = this.foods.map((food) => {
      console.log(food.id, product);
      if (food.id === product.id) {
        return product;
      } else {
        return food;
      }
    });
  }
}
