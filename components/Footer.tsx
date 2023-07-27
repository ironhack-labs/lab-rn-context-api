import React, {useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {useCart} from '../context';

const Footer = () => {
  const {items, showCart, toggleCart, getTotal} = useCart();
  const [total, setTotal] = useState(0);

  useMemo(() => setTotal(getTotal()), [items]);

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        {/* TODO: Bonus Make it a button and switch between catalog and current cart */}
        <Button size="small" onPress={toggleCart}>
          {showCart ? 'Catalog' : 'Cart'}
        </Button>
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total: <Text category="label">${total}</Text>
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
