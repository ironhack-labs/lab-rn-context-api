import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Text} from '@ui-kitten/components';
import {useStoreCtx} from '../context';
import {formatCurrency} from '../utils';

export const Footer = () => {
  const {cart} = useStoreCtx();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        {/* TODO: Bonus Make it a button and switch between catalog and current cart */}
        <Button size="small">Cart</Button>
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total: <Text category="label">{formatCurrency(total)}</Text>
        </Text>
      </View>
    </View>
  );
};

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
