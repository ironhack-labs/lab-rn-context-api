import React, { useContext } from 'react';
import { CartContext } from '../services/store';
import Cart from './Cart';
import Catalog from './Catalog';

const Content = () => {
  const {showCart} = useContext(CartContext);

  return <>{showCart ? <Cart /> : <Catalog />}</>;
};

export default Content;
