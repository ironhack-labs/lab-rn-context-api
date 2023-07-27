import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Text} from '@ui-kitten/components';
import {useCart} from '../context/context';

const Footer = () => {
  const {state} = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (state.products.length) {
      let newTotal = 0;
      for (let index = 0; index < state.products.length; index++) {
        const produt = state.products[index];
        if (produt.added === true) {
          newTotal += produt.price;
        }
      }
      setTotal(newTotal);
    }
  }, [state]);

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        {/* TODO: Bonus Make it a button and switch between catalog and current cart */}
        <Button size="small">Cart</Button>
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total:{' '}
          <Text category="label">
            {new Intl.NumberFormat('es-US', {
              style: 'currency',
              currency: 'USD',
            }).format(total)}
          </Text>
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
