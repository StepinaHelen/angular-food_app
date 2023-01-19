import { FoodItemsWithAmountMock } from './testing-moks/testing-mocks';
import { calculateTotal } from './cart.helpers';

describe('calculate Total Price', () => {
  it('test total price in the cart', () => {
    const result = calculateTotal(FoodItemsWithAmountMock);
    expect(result).toEqual(40);
  });
});
