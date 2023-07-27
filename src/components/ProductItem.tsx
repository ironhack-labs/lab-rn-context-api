import React, {useContext} from 'react';
import {ListItem} from '@ui-kitten/components';

import type {Product} from '../types/Product.type';

import {CartContext} from '../context/CartContext';

import ItemRightButton from './ItemRightButton';

type ProductItemProps = {
  index: number;
  product: Product;
};

const ProductItem = ({index, product}: ProductItemProps) => {
  const {items, addToCart, removeFromCart} = useContext(CartContext);

  const inCart = !!items.find(itemInCart => itemInCart.id === product.id);

  const handleAction = () => {
    if (!inCart) {
      addToCart(product.id);
      return;
    }

    removeFromCart(product.id);
  };

  return (
    <ListItem
      title={`${product.title} | $${product.price}`}
      description={`${product.description} ${index + 1}`}
      accessoryRight={
        <ItemRightButton
          title={!inCart ? 'Add to cart' : 'Remove'}
          action={handleAction}
        />
      }
    />
  );
};

export default ProductItem;
