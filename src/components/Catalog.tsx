import { Button, List, ListItem } from '@ui-kitten/components';
import React, { useContext } from 'react';
import data from '../../data.json';
import { IListItem } from '../../components/Content';
import { CartContext } from '../context/CartContext';
import {  StyleSheet, View } from 'react-native';

export const Catalog = () => {
  const {cartState, addToCart, removeFromCart} = useContext(CartContext);

  return (
    <List
      style={styles.container}
      data={data}
      renderItem={({
        item,
        index,
      }: {
        item: IListItem;
        index: number;
      }): React.ReactElement => (
        <ListItem
          title={`${item.title} | $${item.price}`}
          description={`${item.description} ${index + 1}`}
          accessoryRight={() =>
            renderItemAccessory(
              cartState.items.indexOf(item) >= 0,
              () => addToCart(item),
              () => removeFromCart(item),
            )
          }
        />
      )}
    />
  );
};

const renderItemAccessory = (
  isInCart: boolean,
  onAdd: () => void,
  onDelete: () => void,
): React.ReactElement => (
  <View style={{flexDirection: 'column'}}>
    <Button size="tiny" onPress={onAdd}>Add to cart</Button>
    {isInCart && (
      <Button size="tiny" style={{backgroundColor: 'red'}} onPress={onDelete}>
        Remove
      </Button>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});