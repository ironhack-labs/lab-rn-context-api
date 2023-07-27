/* eslint-disable react/react-in-jsx-scope */
import {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Catalog} from './Catalog';
import {CartContext} from '../context/CartContext';

export const Cart = () => {
  const {products} = useContext(CartContext);
  const isEmpty = products.length > 0;

  return (
    <>
      {isEmpty ? (
        <Catalog data={products} />
      ) : (
        <Text style={styles.msg}>Your Car is Empty </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  msg: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
