import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useCartContext} from '../hooks/CartContext';
import Cart from './Cart';
import Catalog from './Catalog';

const Content = () => {
  const {showCart} = useCartContext();
  return (
    <View style={styles.container}>{showCart ? <Cart /> : <Catalog />}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Content;
