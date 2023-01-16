import { FormControl } from '@angular/forms';

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

export interface FormGoupInterface {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  phone: FormControl<string>;
  city: FormControl<string>;
  street: FormControl<string>;
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
  foods: IOrdersHistoryItem[];
}

export interface IOrdersHistoryItem {
  price: number;
  title: string;
  amount: number;
}

export interface ITHEMES {
  default: ITheme;
  dark: ITheme;
}

export interface ITheme {
  primary: string;
  secondary: string;
  secondaryShadow: string;
  error: string;
  mainFont: string;
  white: string;
  secondaryFont: string;
  background: string;
  borderColor: string;
  boxShadow: string;
  transition: string;
}
