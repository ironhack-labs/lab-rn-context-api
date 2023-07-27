import {StyleSheet, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Button, Text} from '@ui-kitten/components';
import {useCartContext} from '../context/CartContext';

const Footer = () => {
  const {cartItems} = useCartContext();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
      return totalPrice.toFixed(2);
    };

    setTotal(Number(calculateTotal()));
  }, [cartItems]);

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        {/* TODO: Bonus Make it a button and switch between catalog and current cart */}
        <Button size="small">Cart</Button>
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
