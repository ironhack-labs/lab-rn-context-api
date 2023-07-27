import {StyleSheet, View} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {Button, Text} from '@ui-kitten/components';
import { CartContext } from '../src/context/CartContext';

const Footer = () => {
  const {cartState, getTotal, toggleCart} = useContext(CartContext);
  const [totalPrice, settotalPrice] = useState(0.00)

  useEffect(() => {
    settotalPrice(getTotal())
  }, [cartState.items])
  


  return (
    <View style={styles.main}>
      <View style={styles.section}>
        {/* TODO: Bonus Make it a button and switch between catalog and current cart */}
        <Button size="small" onPress={toggleCart}>{cartState.showCart ? "Catalog" : "Cart"}</Button>
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total: <Text category="label">{`$${totalPrice.toFixed(2)}`}</Text>
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
