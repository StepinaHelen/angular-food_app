import { FoodWithAmountInterface } from '../shared/types/types';

export enum LocalStorageKeys {
  cart = 'cart',
  category = 'category',
  sort = 'sort',
  theme = 'theme',
  token = 'token',
}

export interface CartServiceInterface {
  items: FoodWithAmountInterface[];
  total: number;
}
