import React, {createContext, useReducer} from 'react';
import {cartReducer} from './cartReducer';
import {IListItem} from '../../components/Content';

export interface CartState {
  items: IListItem[];
  showCart: boolean
}

export const authInitialState: CartState = {
  items: [],
  showCart : false
};

export interface AuthContextProps {
  cartState: CartState;
  addToCart: (items : IListItem) => void;
  removeFromCart : (item: IListItem) => void;
  getTotal : () => number;
  toggleCart: () => void;
}

export const CartContext = createContext({} as AuthContextProps);

export const CartProvider = ({children}: any) => {
  const [cartState, dispatch] = useReducer(cartReducer, authInitialState);

  const addToCart = (item : IListItem) => {
    console.log("entra")
    dispatch({type: "addToCart", payload: item})
  }

  const removeFromCart = (item: IListItem) => {
    
    dispatch({type: "removeFromCart", payload:item})
  }

  const getTotal = () => {
    let totalPrice = 0
    cartState.items.forEach((item) => {
      totalPrice += item.price
    })
    return totalPrice;
  }

  const toggleCart = () => {
    dispatch({type: "toggleCart"})
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        removeFromCart,
        getTotal,
        toggleCart
      }}>
      {children}
    </CartContext.Provider>
  );
};
