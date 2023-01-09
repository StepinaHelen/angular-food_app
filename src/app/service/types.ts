import { FoodWithAmountInterface } from '../shared/types/types';

export interface CartServiceInterface {
  items: FoodWithAmountInterface[];
  total: number;
}
