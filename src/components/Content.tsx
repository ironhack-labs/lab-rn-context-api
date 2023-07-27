import {Button, List, ListItem, Icon} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {useStoreCtx} from '../context';
import {Item} from '../models';

const ItemAccessory = ({item}: {item: Item}): React.ReactElement => {
  const {addToCart, removeFromCart, cart} = useStoreCtx();

  const alreadyonCart = cart.some(cartItem => cartItem.id === item.id);

  const handleOnPress = () => {
    if (alreadyonCart) {
      removeFromCart(item);
    } else {
      addToCart(item);
    }
  };

  const iconName = alreadyonCart ? 'trash-outline' : 'shopping-cart-outline';

  return (
    <Button
      size="tiny"
      status={alreadyonCart ? 'danger' : 'primary'}
      accessoryLeft={props => <Icon name={iconName} {...props} />}
      onPress={handleOnPress}
    />
  );
};

export const Content = () => {
  const {items} = useStoreCtx();

  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={items}
        renderItem={({
          item,
          index,
        }: {
          item: Item;
          index: number;
        }): React.ReactElement => (
          <ListItem
            title={`${item.title} | $${item.price}`}
            description={`${item.description} ${index + 1}`}
            accessoryRight={<ItemAccessory item={item} />}
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
