import {createContext} from 'react';

interface CartContextType {
  cartItems: number[];
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  showCart: boolean;
  toggleCart: () => void;
}

// Creacion del context CartContext con los valores necesarios para el Cart
const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  showCart: false,
  toggleCart: () => {},
});

export default CartContext;
