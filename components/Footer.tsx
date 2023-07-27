import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { Button, Text } from '@ui-kitten/components';
import CartContext from '../src/context/CartContext/cartContext';

const Footer = () => {
  const { showCart, calculateTotal, toggleCart } = useContext(CartContext)

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        {/* TODO: Bonus Make it a button and switch between catalog and current cart */}
        <Button size="small" onPress={() => toggleCart!()}>{showCart ? 'Catalog': 'Cart'}</Button>
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total: <Text category="label">${calculateTotal!()}</Text>
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
