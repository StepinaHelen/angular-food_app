import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodWithAmountInterface } from '../shared/types/types';
import { FoodServiceService } from 'src/app/service/food-service.service';
import { LocalStorageService } from '../service/local-storage.service';
import { LocalStorageKeys } from '../service/types';

@Component({
  selector: 'food-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public $foods: Observable<FoodWithAmountInterface[]> = new Observable();
  category: string =
    this.localStorageService.getLocalStorageItem(LocalStorageKeys.category) ??
    '';
  sort: string =
    this.localStorageService.getLocalStorageItem(LocalStorageKeys.sort) ||
    'asc';

  constructor(
    private foodServiceService: FoodServiceService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.$foods = this.foodServiceService.getFoodsList(
      this.category,
      this.sort
    );
  }

  filterItemsHandler(category: string) {
    this.category = category;
    if (category === 'all') {
      this.category = '';
      this.$foods = this.foodServiceService.getFoodsList(
        this.category,
        this.sort
      );
    } else {
      this.$foods = this.foodServiceService.getFoodsList(category, this.sort);
    }
    this.localStorageService.setLocalstorageItem(
      LocalStorageKeys.category,
      this.category
    );
  }

  sortedItemsHandler(sort: string) {
    this.sort = sort;
    (this.$foods = this.foodServiceService.getFoodsList(
      this.category,
      this.sort
    )),
      this.localStorageService.setLocalstorageItem(
        LocalStorageKeys.sort,
        this.sort
      );
  }
}
