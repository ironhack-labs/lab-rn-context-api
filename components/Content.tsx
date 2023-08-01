import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {List, ListItem, Button} from '@ui-kitten/components';
import CartContext from '../context/CartContext';
import Cart from './Cart';
import data from '../data.json';

interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

const Content = () => {
  const {addToCart, removeFromCart, cartItems, showCart} =
    useContext(CartContext);

  const renderItemAccessory = (itemId: number) => {
    const itemInCart = cartItems.includes(itemId);
    return (
      <Button
        size="tiny"
        onPress={() =>
          itemInCart ? removeFromCart(itemId) : addToCart(itemId)
        }
        status={itemInCart ? 'danger' : 'primary'}>
        {itemInCart ? 'Remove' : 'Add to cart'}
      </Button>
    );
  };

  return (
    <View style={styles.container}>
      {showCart ? (
        <Cart />
      ) : (
        <List
          style={styles.container}
          data={data}
          renderItem={({item}: {item: IListItem}) => (
            <ListItem
              title={`${item.title} | $${item.price}`}
              description={item.description}
              accessoryRight={() => renderItemAccessory(item.id)}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Content;
