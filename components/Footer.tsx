import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {Button, Text} from '@ui-kitten/components';
import {CartContext} from '../context/CartContext';

const Footer = () => {
  const {products, showCart, toggleCart} = useContext(CartContext);
  const total = products?.reduce((acc, product) => acc + product.price, 0) || 0;

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        {/* TODO: Bonus Make it a button and switch between catalog and current cart */}
        <Button onPress={toggleCart} size="small">
          {showCart ? 'Catalog' : 'Cart'}
        </Button>
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total: <Text category="label">${total.toFixed(2)}</Text>
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
