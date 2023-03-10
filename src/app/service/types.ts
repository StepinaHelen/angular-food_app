import { FoodWithAmountInterface } from '../shared/types/types';

export enum LocalStorageKeys {
  cart = 'cart',
  category = 'category',
  sort = 'sort',
  theme = 'theme',
  userId = 'userId',
}

export interface CartServiceInterface {
  items: FoodWithAmountInterface[];
  total: number;
}
