import React from 'react';
import {useReducer} from 'react';
import {CartContext} from '.';
import {cartReducer, initialCartReducerValue} from './cartReducer';
import {CartContextState, Course} from '../../types';

export const CartContextProvider = ({...props}) => {
  const [{courses, total, showCart}, dispatch] = useReducer(
    cartReducer,
    initialCartReducerValue,
  );

  const addToCart = (course: Course) => {
    dispatch({
      type: 'addToCart',
      payload: {course},
    });
  };

  const removeFromCart = (course: Course) => {
    dispatch({
      type: 'removeFromCart',
      payload: {course},
    });
  };

  const toggleCart = (toggleShowCart: boolean) => {
    dispatch({
      type: 'showCartItems',
      payload: {showCart: toggleShowCart},
    });
  };

  const ctxValue: CartContextState = {
    appTitle: 'LAB Context', // Verificación de contexto en la app
    courses,
    total,
    showCart,
    addToCart,
    removeFromCart,
    toggleCart,
  };

  return <CartContext.Provider {...props} value={ctxValue} />;
};
