import React, {PropsWithChildren, useContext, useReducer} from 'react';
import {createContext} from 'react';
import {IListItem} from '../components/Content';

type AppContextProps = {
  cart: IListItem[];
  dispatch: React.Dispatch<AppReducerActions>;
};

type AppReducerActions =
  | {
      type: 'ADD_TO_CART';
      payload: IListItem;
    }
  | {
      type: 'REMOVE_FROM_CART';
      payload: IListItem['id'];
    };

const AppContext = createContext<AppContextProps>({
  cart: [],
  dispatch: () => {},
});

const appReducer = (
  state: AppContextProps['cart'],
  action: AppReducerActions,
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

export const AppContextProvider = ({children}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(appReducer, []);

  return (
    <AppContext.Provider value={{cart: state, dispatch: dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const {cart, dispatch} = useContext(AppContext);

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
