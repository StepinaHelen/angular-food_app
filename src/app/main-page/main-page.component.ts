import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderByDirection } from 'firebase/firestore';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { FoodServiceService } from 'src/app/service/food-service.service';
import { AuthsService } from '../service/auth.service';
import { LocalStorageService } from '../service/local-storage.service';
import { SpinnerService } from '../service/spinner.service';
import { LocalStorageKeys } from '../service/types';
import { DEFAULT_FETCH_LIMIT } from '../shared/constants';
import { ProductModalComponent } from '../shared/modules/product-modal/product-modal.component';
import { FoodWithAmountInterface } from '../shared/types/types';

@Component({
  selector: 'food-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  category: string =
    this.localStorageService.getLocalStorageItem(LocalStorageKeys.category) ??
    'all';
  sort: OrderByDirection =
    this.localStorageService.getLocalStorageItem(LocalStorageKeys.sort) ||
    'asc';

  cursor: null | FoodWithAmountInterface = null;

  private hasMore = true;
  foods: FoodWithAmountInterface[] = [];

  constructor(
    private foodServiceService: FoodServiceService,
    private localStorageService: LocalStorageService,
    private spinnerService: SpinnerService,
    public authsService: AuthsService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getFoods(this.category, this.sort, this.cursor);
  }

  getFoods(category: string, sort: OrderByDirection, cursor: any) {
    this.foodServiceService
      .getFoodsList(category, sort, cursor)
      .subscribe((data) => {
        this.foods = data;
        // this.cursor = this.foods[this.foods.length - 1];
      });
  }

  filterItemsHandler(category: string) {
    this.category = category;
    this.cursor = null;
    this.getFoods(this.category, this.sort, this.cursor);
    this.localStorageService.setLocalstorageItem(
      LocalStorageKeys.category,
      this.category
    );
  }

  sortedItemsHandler(sort: OrderByDirection) {
    this.sort = sort;
    this.foods = [];
    this.cursor = null;
    this.getFoods(this.category, this.sort, this.cursor);
    this.localStorageService.setLocalstorageItem(
      LocalStorageKeys.sort,
      this.sort
    );
  }

  fetchMoreItems(category: string, sort: OrderByDirection, cursor: any) {
    this.foodServiceService
      .getFoodsList(category, sort, cursor)
      .subscribe((data) => {
        if (data.length < DEFAULT_FETCH_LIMIT || data.length === 0) {
          this.hasMore = false;
        }
        this.foods.push(...data);
        this.cursor = this.foods[this.foods.length - 1];
      });
  }

  fetchMore() {
    this.cursor = this.foods[this.foods.length - 1];
    this.fetchMoreItems(this.category, this.sort, this.cursor);
  }

  addProduct() {
    this.matDialog
      .open(ProductModalComponent, {
        height: '720px',
        width: '900px',
        data: {
          type: 'create',
        },
      })
      .afterClosed();
  }
}
