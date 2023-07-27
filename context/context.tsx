import React, {createContext, useReducer, useContext, Dispatch, ReactNode} from 'react';
import data from '../data.json';

export type Product = {
  title: string;
  id: number;
  price: number;
  description: string;
  added: boolean;
};

type CartState = {
  products: Product[];
  showCart: boolean;
};

type Action =
  | {type: 'ADD_TO_CART'; payload: Product}
  | {type: 'REMOVE_FROM_CART'; payload: Product}
  | {type: 'SHOW_CART'; payload: boolean};

const initialState: CartState = {
  products: data,
  showCart: false,
};

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      state.products.map(product => {
        if (product.id === action.payload.id) {
          product.added = true;
        }
      });
      return {
        ...state,
        products: [...state.products],
      };
    case 'REMOVE_FROM_CART':
      state.products.map(product => {
        if (product.id === action.payload.id) {
          product.added = false;
        }
      });
      return {
        ...state,
        products: [...state.products],
      };
    case 'SHOW_CART':
      return {
        ...state,
        showCart: action.payload,
      };
    default:
      return state;
  }
};

const CartContext = createContext<
  | {
      state: CartState;
      dispatch: Dispatch<Action>;
    }
  | undefined
>(undefined);

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de CartProvider');
  }
  return context;
};
