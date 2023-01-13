import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { FoodWithAmountInterface } from '../shared/types/types';
import { FoodServiceService } from 'src/app/service/food-service.service';
import { LocalStorageService } from '../service/local-storage.service';
import { LocalStorageKeys } from '../service/types';
import { OrderByDirection } from 'firebase/firestore';
import { SpinnerService } from '../service/spinner.service';

@Component({
  selector: 'food-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public foods: FoodWithAmountInterface[] = [];

  private subject = new BehaviorSubject<{
    category: string;
    sort: OrderByDirection;
    cursor: FoodWithAmountInterface | null;
  }>({
    category:
      this.localStorageService.getLocalStorageItem(LocalStorageKeys.category) ??
      'all',
    sort:
      this.localStorageService.getLocalStorageItem(LocalStorageKeys.sort) ||
      'asc',
    cursor: null,
  });

  filter$: Observable<{
    category: string;
    sort: OrderByDirection;
    cursor: FoodWithAmountInterface | null;
  }> = this.subject.asObservable();

  constructor(
    private foodServiceService: FoodServiceService,
    private localStorageService: LocalStorageService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.loadingOn();

    this.filter$
      .pipe(
        switchMap((data) => {
          return this.foodServiceService
            .getFoodsList(data.category, data.sort, data.cursor)
            .pipe(
              map((data) => {
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
    const value = this.subject.getValue();
    this.subject.next({ ...value, cursor: this.foods[this.foods.length - 1] });
  }
}
