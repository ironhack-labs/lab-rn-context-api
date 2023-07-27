import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Catalog from './Catalog';
import CartContext from '../src/context/CartContext/cartContext';
import Cart from './Cart';

export interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

const Content = () => {

  const { showCart } = useContext(CartContext)

  return (
    <View style={styles.container}>
      {showCart ? <Cart /> : <Catalog />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Content;
