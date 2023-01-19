export const FoodItemWithAmountMock = {
  category: 'pizza',
  img: 'https://kfoods.com/images1/newrecipeicon/seafood-pizza_4999.jpg',
  price: 90,
  title: 'Seafood pizza',
  amount: 1,
  id: '2',
  type: 'added',
};

export const FoodItemsWithAmountMock = [
  {
    category: 'pizza',
    img: 'https://kfoods.com/images1/newrecipeicon/seafood-pizza_4999.jpg',
    price: 10,
    title: 'Seafood pizza',
    amount: 2,
    id: '1',
    type: 'added',
  },
  {
    category: 'pizza',
    img: 'https://kfoods.com/images1/newrecipeicon/seafood-pizza_4999.jpg',
    price: 20,
    title: 'Seafood pizza',
    amount: 1,
    id: '2',
    type: 'added',
  },
];

export const ItemHistoryDataMock = [
  {
    city: '44444444',
    date: 'Jan 10, 2023',
    firstName: 'ssss',
    lastName: 'sssssssss',
    phone: '444444444444',
    street: '44444444',
    foods: [
      {
        amount: 1,
        category: 'drinks',
        id: 'LFS3GlIPuaPcny0zRxiW',
        img: 'https://stylesatlife.com/wp-content/uploads/2020/01/black-coffee-benefits.jpg',
        price: 10,
        title: 'Black Coffee',
        type: 'added',
      },
      {
        amount: 1,
        category: 'pizza',
        id: 'U3fUK1HxUuvIEz4V7SCe',
        img: 'https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg',
        price: 12,
        title: 'Cheese pizza',
        type: 'added',
      },
    ],
  },
];

export const ItemForHistoryOrderMock = {
  city: '44444444',
  date: 'Jan 10, 2023',
  firstName: 'ssss',
  lastName: 'sssssssss',
  phone: '444444444444',
  street: '44444444',
  foods: [
    {
      amount: 1,
      category: 'drinks',
      id: 'LFS3GlIPuaPcny0zRxiW',
      img: 'https://stylesatlife.com/wp-content/uploads/2020/01/black-coffee-benefits.jpg',
      price: 10,
      title: 'Black Coffee',
      type: 'added',
    },
    {
      amount: 1,
      category: 'pizza',
      id: 'U3fUK1HxUuvIEz4V7SCe',
      img: 'https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg',
      price: 12,
      title: 'Cheese pizza',
      type: 'added',
    },
  ],
};

export const CartMock = {
  items: [
    {
      category: 'pizza',
      img: 'https://kfoods.com/images1/newrecipeicon/seafood-pizza_4999.jpg',
      price: 90,
      title: 'Seafood pizza',
      amount: 1,
      id: '12',
      type: 'added',
    },
  ],
  total: 1,
};
// export const CartItems = [FoodItemWithAmountMock];
