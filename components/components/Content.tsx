import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {List, ListItem, Button, Text} from '@ui-kitten/components';
import CartContext, {ICartItem, ActionType} from '../CartContext';
import data from '../data.json';

const Content = () => {
  const {state, dispatch} = useContext(CartContext);

  const handleAddToCart = (item: ICartItem) => {
    if (state.cartItems.some(cartItem => cartItem.id === item.id)) {
      // Item is already in the cart, remove it
      dispatch({type: ActionType.REMOVE_FROM_CART, payload: item.id});
    } else {
      // Item is not in the cart, add it
      dispatch({type: ActionType.ADD_TO_CART, payload: item});
    }
  };

  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={data}
        renderItem={({item}: {item: ICartItem}): React.ReactElement => (
          <ListItem
            title={`${item.title} | $${item.price}`}
            description={`${item.description}`}
            accessoryRight={() => (
              <Button
                size="tiny"
                onPress={() => handleAddToCart(item)}
                appearance={
                  state.cartItems.some(cartItem => cartItem.id === item.id)
                    ? 'filled'
                    : 'outline'
                }>
                {state.cartItems.some(cartItem => cartItem.id === item.id)
                  ? 'Remove'
                  : 'Add to cart'}
              </Button>
            )}
          />
        )}
      />
    </View>
  );
};

export default Content;
