import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, List, ListItem} from '@ui-kitten/components';

// Context
import {useCart} from '../CartContext';

// Tipos
import {IListItem} from '../types';

const Cart = () => {
  const {state, dispatch} = useCart();

  const renderItemAccessory = (item: IListItem) => {
    const handleRemoveFromCart = () => {
      dispatch({type: 'REMOVE_FROM_CART', payload: item.id});
    };

    return (
      <Button onPress={handleRemoveFromCart} size="tiny">
        Remove
      </Button>
    );
  };

  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={state} // Mostramos solo los elementos del carrito
        renderItem={({item}: {item: IListItem}) => (
          <ListItem
            title={`${item.title} | $${item.price}`}
            description={`${item.description}`}
            accessoryRight={() => renderItemAccessory(item)}
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

export default Cart;
