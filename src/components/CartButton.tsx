import {Button, Icon} from '@ui-kitten/components';
import React from 'react';

import {useStoreCtx} from '../context';
import {Item} from '../models';

export const CartButton = ({item}: {item: Item}): React.ReactElement => {
  const {addToCart, removeFromCart, cart} = useStoreCtx();

  const alreadyOnCart = cart.some(cartItem => cartItem.id === item.id);

  const handleOnPress = () => {
    if (alreadyOnCart) {
      removeFromCart(item);
    } else {
      addToCart(item);
    }
  };

  const iconName = alreadyOnCart ? 'trash-outline' : 'shopping-cart-outline';

  return (
    <Button
      size="tiny"
      status={alreadyOnCart ? 'danger' : 'primary'}
      accessoryLeft={props => <Icon name={iconName} {...props} />}
      onPress={handleOnPress}
    />
  );
};
