/* eslint-disable react/react-in-jsx-scope */
import {ReactNode, useReducer} from 'react';
import {CartContext, initialState} from './CartContext';
import {cartReducer} from './cartReducer';
import {Product, types} from '../types/types';

type ChildrenComponent = {
  children: ReactNode;
};

export const CartProvider = ({children}: ChildrenComponent) => {
  const [{products, showCart}, dispatch] = useReducer(
    cartReducer,
    initialState,
  );

  const addToCart = ({id, price, title, description}: Product) => {
    const product = {id, price, title, description};
    const action = {
      type: types.ADD,
      payload: product,
    };
    dispatch(action);
  };

  const removeFromCart = ({id, price, title, description}: Product) => {
    const product = {id, price, title, description};
    const action = {
      type: types.REMOVE,
      payload: product,
    };
    dispatch(action);
  };

  const toggleCart = () => {
    const action = {
      type: types.TOGGLE,
    };
    dispatch(action);
  };

  const value = {products, showCart, addToCart, removeFromCart, toggleCart};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
