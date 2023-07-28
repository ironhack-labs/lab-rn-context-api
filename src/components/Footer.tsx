import {StyleSheet, View} from 'react-native';
import React, { useContext } from 'react';
import {Button, Text} from '@ui-kitten/components';
import { CartContext } from '../context/CartContext';

const Footer = () => {
  const { cartState, toggleCart } = useContext(CartContext);
  const totalArticles = cartState.item.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)

  const handleCart = () => {
    toggleCart(!cartState.showCart)
  }
  
  return (
    <View style={styles.main}>
      <View style={styles.section}>
        <Button size="small" onPress={handleCart}>{cartState.showCart ? 'Catalog' : 'Cart' }</Button>
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total: <Text category="label">{totalArticles}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  main: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 10,
  },
  section: {
    flex: 1,
  },
  total: {
    alignItems: 'flex-end',
  },
});
