import React, {createContext, useReducer, useContext, Dispatch} from 'react';
import {CartItem} from './types';

type CartState = CartItem[];

type CartAction =
  | {type: 'ADD_TO_CART'; payload: CartItem}
  | {type: 'REMOVE_FROM_CART'; payload: number};

const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
}>({
  state: [],
  dispatch: () => {},
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.find(item => item.id === action.payload.id)) {
        return state.map(item =>
          item.id === action.payload.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      }
      return [...state, {...action.payload, quantity: 1}];

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export const CartProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

//Estado general del total
export const useCart = () => useContext(CartContext);
