import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import CartContext from '../context/CartContext';
import data from '../data.json';

const Footer = () => {
  const {showCart, toggleCart, cartItems} = useContext(CartContext);

  const calculateTotal = (): number => {
    // Filtrado de un array de datos para obtener los items
    const selectedItems = data.filter(item => cartItems.includes(item.id));
    // Como calcular el precio total de los items
    const total = selectedItems.reduce((acc, item) => acc + item.price, 0);

    return total;
  };
  //Counter de items dentro del carrito
  const cartItemCount = cartItems.length;

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        <Button size="small" onPress={toggleCart}>
          {showCart ? `Catalog (${cartItemCount})` : `Cart (${cartItemCount})`}
        </Button>
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total: <Text category="label">${calculateTotal().toFixed(2)}</Text>
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

export default Footer;
