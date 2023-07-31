import {Button, Text} from '@ui-kitten/components';
import React, {useContext, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import CartActions from '../services/actions';
import {CartContext, CartDispatchContext} from '../services/store';

const Footer = () => {
  const dispatch = useContext(CartDispatchContext);
  const {cart, showCart} = useContext(CartContext);
  const total = useMemo(
    () => cart.reduce((prev, curr) => prev + curr.price, 0),
    [cart],
  );

  const toggleCart = () => {
    dispatch(CartActions.TOGGLE_CART());
  };

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        {/* TODO: Bonus Make it a button and switch between catalog and current cart */}
        <Button size="small" onPress={toggleCart}>
          {showCart ? 'Close Cart' : 'Cart'}
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
