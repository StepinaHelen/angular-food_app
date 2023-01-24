import { FoodWithAmountInterface } from '../types/types';

export const calculateTotal = (items: FoodWithAmountInterface[]) => {
  return items.reduce((acc, item) => (acc += item.amount * item.price), 0);
};
