import React, {useContext} from 'react';
import {View, Modal, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Button, Text} from '@ui-kitten/components';

import {CartContext} from '../context/CartContext';

import Cart from './Cart';

const CartModal = () => {
  const {items, total, showCart, toggleCart} = useContext(CartContext);

  return (
    <>
      {showCart && <View style={styles.overlay} />}
      <Modal animationType='slide' visible={showCart} transparent>
        <TouchableWithoutFeedback onPress={toggleCart}>
          <View style={styles.modalTop} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text category='h4' style={styles.title}>
              Cart
            </Text>
            <Cart />
            {items.length > 0 && <Button>Buy</Button>}
            <Text category='h4' style={styles.total}>
              Total: ${total}
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CartModal;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalTop: {
    flex: 0.5,
  },
  modalContent: {
    backgroundColor: 'rgb(21, 26, 48)',
    flex: 1,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    paddingVertical: 15,
  },
  total: {
    textAlign: 'center',
    paddingVertical: 15,
  },
});
