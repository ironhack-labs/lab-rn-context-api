import React, { ReactNode, createContext, useContext, useReducer } from 'react';

export type DataT = {
  id: number;
  title: string;
  price: number;
  description: string;
};

type AppStateT = {
  cart: DataT[];
  showCart: boolean;
  toggleCart: () => void;
  addToCart: (item: DataT) => void;
  removeFromCart: (id: number) => void;
};

type ReducerStateT = {
  cart: DataT[];
  showCart: boolean;
};

type ActionT =
  | { type: 'toggleCart' }
  | { type: 'addToCart'; payload: { item: DataT } }
  | { type: 'removeFromCart'; payload: { id: number } };

const initialAppReducerValue = { cart: [], showCart: false };
const initialAppValue = {
  cart: [],
  showCart: false,
  toggleCart: () => {},
  addToCart: (item: DataT) => {},
  removeFromCart: (id: number) => {}
};

const AppContext = createContext<AppStateT>(initialAppValue);

function appReducer(state: ReducerStateT, action: ActionT): ReducerStateT {
  switch (action.type) {
    case 'addToCart':
      return { ...state, cart: [...state.cart, action.payload.item] };
    case 'removeFromCart':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      };
    case 'toggleCart':
      return { ...state, showCart: !state.showCart };
    default: {
      throw new Error(`Unhandled action type: ${action['type']}`);
    }
  }
}

function AppProvider({ children }: { children: ReactNode }) {
  const [{ cart, showCart }, dispatch] = useReducer(
    appReducer,
    initialAppReducerValue
  );

  const addToCart = (item: DataT) =>
    dispatch({ type: 'addToCart', payload: { item } });

  const removeFromCart = (id: number) =>
    dispatch({ type: 'removeFromCart', payload: { id } });

  const toggleCart = () => dispatch({ type: 'toggleCart' });

  const value = { cart, addToCart, removeFromCart, showCart, toggleCart };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useApp() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider');
  }

  return context;
}

export { AppProvider, useApp };
