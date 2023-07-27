import {createContext, useContext} from 'react';
import {CartContextState} from '../../types';

const INITIAL_CTX_VALUE: CartContextState = {
  appTitle: '',
  courses: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
};

const CartContext = createContext<CartContextState>(INITIAL_CTX_VALUE);

const useCartContext = () => {
  const ctxValue = useContext(CartContext);

  if (!ctxValue) {
    throw new Error(
      'useCartContext must be use within the CartContextProvider',
    );
  }

  return ctxValue;
};

export {CartContext, useCartContext};
