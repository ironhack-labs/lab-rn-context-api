import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, List, ListItem } from '@ui-kitten/components';
import { useCart } from '../CartContext';
import { IListItem } from '../types';

const CartComponent = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (itemId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={state.filter((item) => item.quantity > 0)} // Mostrar solo elementos con cantidad > 0
        renderItem={({ item }: { item: IListItem }) => (
          <ListItem
            title={`${item.title} | $${item.price}`}
            description={`Quantity: ${item.quantity}`}
            accessoryRight={() => (
              <Button onPress={() => handleRemoveFromCart(item.id)} size="tiny">
                Remove
              </Button>
            )}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CartComponent;
