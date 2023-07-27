import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Text} from '@ui-kitten/components';
import {useCartContext} from '../hooks/CartContext';

const Footer = () => {
  const {total, showCart, toggleCart} = useCartContext();

  const handleChangeShowCart = () => {
    toggleCart(!showCart);
  };
  return (
    <View style={styles.main}>
      <View style={styles.section}>
        {showCart ? (
          <Button size="small" onPress={handleChangeShowCart}>
            Catalog
          </Button>
        ) : (
          <Button size="small" onPress={handleChangeShowCart}>
            Cart
          </Button>
        )}
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
