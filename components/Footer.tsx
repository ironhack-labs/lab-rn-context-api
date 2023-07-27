import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {CartContext} from './context/CartContext';

const Footer = () => {
  const {state} = useContext(CartContext);

  // Calculate the total value of all items in the cart
  const getTotalAmount = (): number => {
    return state.cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        <Button size="small">Cart</Button>
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total: <Text category="label">${getTotalAmount().toFixed(2)}</Text>
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
