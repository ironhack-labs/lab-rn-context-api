export const types = {
  ADD: '[Cart] Add to cart',
  REMOVE: '[Cart] Remove from cart',
  TOGGLE: '[Cart] Switch cart',
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export type ReducerState = {
  products: Product[];
  showCart: boolean;
};

export type ProductContext = {
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  showCart: boolean;
  toggleCart: () => void;
};

export type ActionType = {
  type: string;
  payload: Product;
};
