import React from 'react';
import {Text} from 'react-native';
import Catalog from './Catalog';
import {useCart} from '../context/context';
import Cart from './Cart';

const Content = () => {
  const {state} = useCart();
  if (!state.showCart) {
    return <Catalog />;
  }
  return <Cart />;
};

export default Content;
