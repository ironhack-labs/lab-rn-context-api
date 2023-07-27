import React, {PropsWithChildren, useContext, useReducer} from 'react';
import {createContext} from 'react';
import {IListItem} from '../interfaces/interfaces';

type ProductContextProps = {
  cart: IListItem[];
  dispatch: React.Dispatch<ProductReducerActions>;
};

type ProductReducerActions =
  | {
      type: 'ADD_TO_CART';
      payload: IListItem;
    }
  | {
      type: 'REMOVE_FROM_CART';
      payload: IListItem['id'];
    };

const ProductContext = createContext<ProductContextProps>({
  cart: [],
  dispatch: () => {},
});

const productReducer = (
  state: ProductContextProps['cart'],
  action: ProductReducerActions,
) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export const ProductContextProvider = ({children}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{cart: state, dispatch: dispatch}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const {cart, dispatch} = useContext(ProductContext);

  const total = cart.reduce((result, item) => result + item.price, 0);
  const showCartButton = cart.length > 0;

  const addToCard = (item: IListItem) => {
    dispatch({type: 'ADD_TO_CART', payload: item});
  };

  const removeItem = (id: number) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: id});
  };

  return {cart, dispatch, addToCard, removeItem, total, showCartButton};
};
