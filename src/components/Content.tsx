import React, { useContext } from 'react'
import Catalog from './Catalog/Catalog'
import { CartContext } from '../context/CartContext';
import { Cart } from './Cart/Cart';

const Content = () => {
  const { cartState } = useContext(CartContext);
  return (
    cartState.showCart ? <Cart/> : <Catalog/>
  )
}

export default Content