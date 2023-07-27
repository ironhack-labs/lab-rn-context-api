import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Text } from '@ui-kitten/components';
import { DataT, useApp } from '../store';

const Footer = () => {
  const { cart, toggleCart, showCart } = useApp();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const total = cart.reduce(
      (acc: number, currentValue: DataT) => acc + currentValue.price,
      0
    );

    setTotal(total);
  }, [cart.length]);

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        <Button size="small" onPress={toggleCart}>
          {showCart ? 'Cart' : 'Catalog'}
        </Button>
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total: <Text category="label">{`$${total.toFixed(2)}`}</Text>
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
    gap: 10
  },
  section: {
    flex: 1
  },
  total: {
    alignItems: 'flex-end'
  }
});
