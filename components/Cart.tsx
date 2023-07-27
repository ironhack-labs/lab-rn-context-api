import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {List, ListItem, Button} from '@ui-kitten/components';
import CartContext from '../context/CartContext';
import data from '../data.json';

const Cart = () => {
  const {cartItems, removeFromCart} = useContext(CartContext);

  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={data.filter(item => cartItems.includes(item.id))}
        renderItem={({item}) => (
          <ListItem
            title={`${item.title} | $${item.price}`}
            description={item.description}
            accessoryRight={() => (
              <Button
                size="tiny"
                onPress={() => removeFromCart(item.id)}
                status="danger">
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

export default Cart;
