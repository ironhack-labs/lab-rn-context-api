import React, {createContext, useContext, useReducer} from 'react';

interface Book {
  id: number;
  title: string;
  price: number;
  description: string;
}

interface CartState {
  items: Book[];
  showCart: boolean;
}

interface CartContextProps {
  items: Book[];
  showCart: boolean;
  addToCart: (item: Book) => void;
  removeFromCart: (id: number) => void;
  toggleCart: () => void;
}

type CartAction =
  | {type: 'ADD_TO_CART'; payload: Book}
  | {type: 'REMOVE_FROM_CART'; payload: number}
  | {type: 'TOGGLE_CART'};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        showCart: !state.showCart,
      };
    default:
      return state;
  }
};

export const CartContext = createContext<CartContextProps>({
  items: [],
  showCart: false,
  addToCart: () => {},
  removeFromCart: () => {},
  toggleCart: () => {},
});

type ProviderProps = {
  children: React.ReactNode;
};

export function CartProvider({children}: ProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    showCart: false,
  });

  const addToCart = (item: Book) =>
    dispatch({type: 'ADD_TO_CART', payload: item});

  const removeFromCart = (id: number) =>
    dispatch({type: 'REMOVE_FROM_CART', payload: id});

  const toggleCart = () => dispatch({type: 'TOGGLE_CART'});

  return (
    <CartContext.Provider
      value={{...state, addToCart, removeFromCart, toggleCart}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const cartContext = useContext(CartContext);

  function isAlreadyInCart(id: number) {
    const itemInCart = cartContext.items.filter(item => item.id === id);
    return itemInCart.length ? true : false;
  }

  function getTotal() {
    const total = cartContext.items.reduce(
      (acc, current) => acc + current.price,
      0,
    );
    return Number(total.toFixed(2));
  }

  return {
    ...cartContext,
    isAlreadyInCart,
    getTotal,
  };
}
