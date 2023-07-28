import React, { createContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";
import { IListItem } from "../components/Content";

export interface CartState {
  item: IListItem[];
}

export const cartInitialState: CartState = {
  item: []
}

export interface CartContextProps {
  cartState: CartState;
  addToCart: (item: IListItem) => void;
  removeFromCart: (id: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({children}: {children: JSX.Element[]}) => {

  const [cartState, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (item: IListItem) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item
    })
  }

  const removeFromCart = (id: number) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id
    })
  }

  return (
    <CartContext.Provider value={{
      cartState,
      addToCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}