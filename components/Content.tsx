import {Button, List, ListItem} from '@ui-kitten/components';
import React, { useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import data from '../data.json';
import { CartContext } from '../context/CartContext';

export interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

const renderItemAccessory = ({...item}): React.ReactElement => {
  const { addToCart, removeFromCart, cartState } = useContext(CartContext);
  
  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price
    });
  }

  const removeArticle = ({...item}) => {
    removeFromCart(item.id);
  }

  return (
    cartState.item.find(elemento => elemento.id === item.id) ?
    <Button size="tiny" onPress={() => removeArticle(item)}>Remove to cart</Button>
    : <Button size="tiny" onPress={handleAddToCart}>Add to cart</Button>
  )
};

const Content = () => {

  return (
    <View style={styles.container}>
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
