import {useReducer} from 'react';

import {Item} from '../../models';
import data from '../../../data.json';

export type StoreContextState = {
  items: Item[];
  cart: Item[];
};

export const initialStoreState: StoreContextState = {
  items: data,
  cart: [],
};

type StoreContextActions = {
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
};

export type StoreContext = StoreContextState & StoreContextActions;

export const initialContextValue: StoreContext = {
  ...initialStoreState,
  addToCart: () => null,
  removeFromCart: () => null,
};

enum STORE_TYPES {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}
type AddToCartAction = {
  type: STORE_TYPES.ADD_TO_CART;
  payload: {item: Item};
};
type RemoveFromCartAction = {
  type: STORE_TYPES.REMOVE_FROM_CART;
  payload: {item: Item};
};
type StoreActions = AddToCartAction | RemoveFromCartAction;

const storeReducer = (
  state: StoreContextState,
  action: StoreActions,
): StoreContextState => {
  switch (action.type) {
    case STORE_TYPES.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart].concat(action.payload.item),
      };
    case STORE_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item !== action.payload.item),
      };
    default:
      return state;
  }
};

export const useContextStore = () => {
  const [state, dispatch] = useReducer(storeReducer, initialStoreState);

  const storeActions: StoreContextActions = {
    addToCart: (item: Item) => {
      dispatch({type: STORE_TYPES.ADD_TO_CART, payload: {item}});
    },
    removeFromCart: (item: Item) => {
      dispatch({type: STORE_TYPES.REMOVE_FROM_CART, payload: {item}});
    },
  };

  return {
    ...state,
    ...storeActions,
  } as StoreContext;
};
