import { FormControl } from '@angular/forms';
import { OrderByDirection } from 'firebase/firestore';

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

export interface IFormGoupLogin {
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface IFormGoupRegister {
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
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

export interface IIcons {
  name: string;
  src: string;
}
export interface FoodFilterInterface {
  category: string;
  sort: OrderByDirection;
  cursor: FoodWithAmountInterface | null;
}

export enum UserRole {
  client = 'client',
  admin = 'admin',
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}
