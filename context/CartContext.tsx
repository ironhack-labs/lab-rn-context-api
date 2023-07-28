import React, {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  ReactNode,
} from 'react';

// Definir el tipo para los elementos del carrito
interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

// Definir el tipo para las acciones del carrito
type CartAction =
  | {type: 'ADD_TO_CART'; item: IListItem}
  | {type: 'REMOVE_FROM_CART'; id: number};

// Definir el tipo para el contexto
interface CartContextType {
  cartItems: IListItem[];
  dispatch: Dispatch<CartAction>;
}

// Crear el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Crear el reducer para manejar el estado del carrito
const cartReducer = (state: IListItem[], action: CartAction): IListItem[] => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.item];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

// Crear el CartProvider
const CartProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{cartItems, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

// Crear un custom hook para usar el contexto en los componentes
const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext debe ser utilizado dentro de CartProvider');
  }
  return context;
};

export {CartProvider, useCartContext};
