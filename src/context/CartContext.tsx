import React, { createContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";
import { IListItem } from "../components/Catalog/Catalog";


export interface CartState {
  item: IListItem[];
  showCart?: boolean;
}

export const cartInitialState: CartState = {
  item: [],
  showCart: false
}

export interface CartContextProps {
  cartState: CartState;
  addToCart: (item: IListItem) => void;
  removeFromCart: (id: number) => void;
  toggleCart: (showCart: boolean) => void;
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

  const toggleCart = (showCart: boolean) => {
    dispatch({
      type: 'SHOW_CART',
      payload: showCart
    })
  }

  return (
    <CartContext.Provider value={{
      cartState,
      addToCart,
      removeFromCart,
      toggleCart
    }}>
      {children}
    </CartContext.Provider>
  )
}