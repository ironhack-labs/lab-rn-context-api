import {createContext} from 'react';
import {ProductContext} from '../types/types';

export const initialState = {
  products: [] || null,
  addToCart: () => {},
  removeFromCart: () => {},
  showCart: false,
  toggleCart: () => {},
};

export const CartContext = createContext<ProductContext>(initialState);
