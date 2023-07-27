import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, List, ListItem} from '@ui-kitten/components';

import {useCart} from '../CartContext';

//Datos
import data from '../data.json';

//Tipos
import {IListItem} from '../types';

const Content = () => {
  const {state, dispatch} = useCart();

  const renderItemAccessory = (item: IListItem) => {
    const isInCart = state.some(cartItem => cartItem.id === item.id);

    const handleAddToCart = () => {
      if (isInCart) {
        dispatch({type: 'REMOVE_FROM_CART', payload: item.id});
      } else {
        dispatch({type: 'ADD_TO_CART', payload: item});
      }
    };

    return (
      <Button onPress={handleAddToCart} size="tiny">
        {isInCart ? 'Remove' : 'Add to cart'}
      </Button>
    );
  };

  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={data}
        renderItem={({item}: {item: IListItem}): React.ReactElement => (
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

export default Content;
