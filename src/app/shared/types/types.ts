export interface FoodInterfaceInput {
  category: string;
  img: string;
  price: number;
  title: string;
}

export interface FoodInterface extends FoodInterfaceInput {
  id: string;
  type: string;
}

export interface FoodWithAmountInterface extends FoodInterface {
  amount: number;
}

export interface IForm {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  street: string;
  date: string;
}

export interface IOrderItemsHistory extends IForm {
  foods?: IOrdersHistoryItem[];
}

export interface IOrdersHistoryItem {
  price: number;
  title: string;
  amount: number;
}
