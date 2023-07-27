import React from 'react';
import Catalog from './Catalog';
import Cart from './Cart';
import {useCart} from '../context';

export default function () {
  const {showCart} = useCart();
  return showCart ? <Cart /> : <Catalog />;
}
