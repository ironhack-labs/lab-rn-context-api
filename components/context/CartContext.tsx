import React, {useReducer, createContext, Dispatch} from 'react';

// Define the item interface with necessary properties
export interface ICartItem {
  id: number;
  title: string;
  price: number;
  description: string;
}

// Define the state shape for the cart
interface CartState {
  cartItems: ICartItem[];
}

// Define the actions
export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

interface AddToCartAction {
  type: ActionType.ADD_TO_CART;
  payload: ICartItem;
}

interface RemoveFromCartAction {
  type: ActionType.REMOVE_FROM_CART;
  payload: number; // Item ID to remove
}

type CartAction = AddToCartAction | RemoveFromCartAction;

// Create the reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case ActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
}>({
  state: {cartItems: []},
  dispatch: () => null,
});

const CartProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, {cartItems: []});

  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

export {CartProvider, CartContext};
