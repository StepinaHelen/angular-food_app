import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderByDirection } from 'firebase/firestore';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { FoodServiceService } from 'src/app/service/food-service.service';
import { LocalStorageService } from '../service/local-storage.service';
import { SpinnerService } from '../service/spinner.service';
import { LocalStorageKeys } from '../service/types';
import { DEFAULT_FETCH_LIMIT } from '../shared/constants';
import {
  FoodFilterInterface,
  FoodWithAmountInterface,
} from '../shared/types/types';

@Component({
  selector: 'food-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  initialValues: FoodFilterInterface = {
    category:
      this.localStorageService.getLocalStorageItem(LocalStorageKeys.category) ??
      'all',
    sort:
      this.localStorageService.getLocalStorageItem(LocalStorageKeys.sort) ||
      'asc',
    cursor: null,
  };

  public foods: FoodWithAmountInterface[] = [];
  private hasMore = true;

  private subject = new BehaviorSubject<FoodFilterInterface>(
    this.initialValues
  );

  filter$: Observable<FoodFilterInterface> = this.subject.asObservable();

  constructor(
    private foodServiceService: FoodServiceService,
    private localStorageService: LocalStorageService,
    private spinnerService: SpinnerService
  ) {}

  ngOnDestroy(): void {
    this.foods = [];
    this.hasMore = true;
    this.subject.next(this.initialValues);
  }

  ngOnInit(): void {
    this.spinnerService.loadingOn();

    this.filter$
      .pipe(
        switchMap((data) => {
          return this.foodServiceService
            .getFoodsList(data.category, data.sort, data.cursor)
            .pipe(
              map((data) => {
                if (data.length < DEFAULT_FETCH_LIMIT || data.length === 0) {
                  this.hasMore = false;
                }
                this.foods.push(...data);
              })
            );
        })
      )
      .subscribe();
  }

  filterItemsHandler(category: string) {
    this.foods = [];
    const value = this.subject.getValue();
    this.subject.next({ ...value, category, cursor: null });
    this.localStorageService.setLocalstorageItem(
      LocalStorageKeys.category,
      category
    );
  }

  sortedItemsHandler(sort: OrderByDirection) {
    this.foods = [];
    const value = this.subject.getValue();
    this.subject.next({ ...value, sort, cursor: null });
  }

  fetchMore() {
    if (this.hasMore) {
      const value = this.subject.getValue();
      this.subject.next({
        ...value,
        cursor: this.foods[this.foods.length - 1],
      });
    }
  }
}
