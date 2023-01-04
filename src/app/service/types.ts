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
