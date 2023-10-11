import {createContext, useReducer} from 'react';
import {INITIAL_STATE} from './constants';
import {ICartContext} from './interface';
import reducer from './reducer';

export const CartContext = createContext<ICartContext>(INITIAL_STATE);
export const CartDispatchContext = createContext(null as any);

const useStore = () => {
  const [cart, dispatch] = useReducer(reducer, INITIAL_STATE);

  return {
    cart,
    dispatch,
    CartContext,
    CartDispatchContext,
  };
};

export default useStore;
