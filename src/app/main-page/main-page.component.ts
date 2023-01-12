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
  public lastItem: FoodWithAmountInterface | null = null;

  private subject = new BehaviorSubject<{
    category: string;
    sort: OrderByDirection;
  }>({
    category:
      this.localStorageService.getLocalStorageItem(LocalStorageKeys.category) ??
      'all',
    sort:
      this.localStorageService.getLocalStorageItem(LocalStorageKeys.sort) ||
      'asc',
  });

  filter$: Observable<{
    category: string;
    sort: OrderByDirection;
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
            .getFoodsList(data.category, data.sort)
            .pipe(
              map((data) => {
                this.foods = data;
                this.lastItem = data[data.length - 1];
              })
            );
        })
      )
      .subscribe();
  }

  filterItemsHandler(category: string) {
    const value = this.subject.getValue();

    this.subject.next({ ...value, category });

    this.localStorageService.setLocalstorageItem(
      LocalStorageKeys.category,
      category
    );
  }

  sortedItemsHandler(sort: OrderByDirection) {
    const value = this.subject.getValue();
    this.subject.next({ ...value, sort });
  }

  nextPage() {
    const value = this.subject.getValue();

    this.foodServiceService
      .getFoodsList(
        value.category,
        value.sort,
        this.foods[this.foods.length - 1]
      )
      .pipe(
        map((data) => {
          this.foods.push(...data);
        })
      )
      .subscribe();
  }
}
