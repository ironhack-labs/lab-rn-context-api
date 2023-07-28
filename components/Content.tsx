import {Button, List, ListItem} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import data from '../data.json';
import {useCartContext} from '../context/CartContext';

interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

const Content = () => {
  const {cartItems} = useCartContext();

  const renderItemAccessory = (item: IListItem): React.ReactElement => {
    const {dispatch} = useCartContext();

    const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

    const handleButtonPress = () => {
      if (isInCart) {
        dispatch({type: 'REMOVE_FROM_CART', id: item.id});
      } else {
        dispatch({type: 'ADD_TO_CART', item});
      }
    };

    return (
      <Button size="tiny" onPress={handleButtonPress}>
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
