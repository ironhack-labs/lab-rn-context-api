import React, {useState, ReactNode} from 'react';
import CartContext from './CartContext';

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({children}: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  //Funcion para agregar un item al carrito
  const addToCart = (itemId: number) => {
    setCartItems(prevItems => [...prevItems, itemId]);
  };
  //Funcion para remover un item del carrito
  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item !== itemId));
  };

  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart);
  };

  return (
    <CartContext.Provider
      value={{cartItems, addToCart, removeFromCart, showCart, toggleCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
