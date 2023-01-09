import { FoodWithAmountInterface } from '../shared/types/types';

export enum LocalStorageKeys {
  cart = 'cart',
  category = 'category',
  sort = 'sort',
}

export interface CartServiceInterface {
  items: FoodWithAmountInterface[];
  total: number;
}
