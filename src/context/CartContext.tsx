import React, {PropsWithChildren, createContext, useReducer} from 'react';

import type {Product} from '../types/Product.type';

import {findProduct} from '../helpers/findProduct';
import {formatCurrency} from '../helpers/formatCurrency';

type CartProviderProps = PropsWithChildren<{}>;

type ACTION_TYPE =
  | {type: 'ADD_ITEM'; payload: number}
  | {type: 'REMOVE_ITEM'; payload: number}
  | {type: 'TOGGLE_CART'};

type CartState = {
  items: Product[];
  total: string;
  showCart: boolean;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  toggleCart: () => void;
};

const initialState: CartState = {
  items: [],
  total: '0.00',
  showCart: false,
  addToCart: () => {},
  removeFromCart: () => {},
  toggleCart: () => {},
};

const reducer = (state: CartState, action: ACTION_TYPE): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, findProduct(action.payload)],
        total: formatCurrency(
          (
            parseFloat(state.total) + findProduct(action.payload).price
          ).toString()
        ),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: [...state.items?.filter(item => item.id !== action.payload)],
        total: formatCurrency(
          (
            parseFloat(state.total) - findProduct(action.payload).price
          ).toString()
        ),
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        showCart: !state.showCart,
      };
    default:
      return state;
  }
};

export const CartContext = createContext<CartState>(initialState);

export const CartProvider = ({children}: CartProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id: number) => dispatch({type: 'ADD_ITEM', payload: id});

  const removeFromCart = (id: number) =>
    dispatch({type: 'REMOVE_ITEM', payload: id});

  const toggleCart = () => dispatch({type: 'TOGGLE_CART'});

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        total: state.total,
        showCart: state.showCart,
        addToCart,
        removeFromCart,
        toggleCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
