import React from 'react';
import {Button} from '@ui-kitten/components';
import {useCartContext} from '../hooks/CartContext';
import {Course} from '../types';

const CartItemAction = (course: Course): React.ReactElement => {
  const {courses, removeFromCart, addToCart} = useCartContext();
  const courseInCart = courses.map(x => x.id).includes(course.id);

  if (courseInCart) {
    return (
      <Button size="tiny" onPress={() => removeFromCart(course)}>
        Remove from cart
      </Button>
    );
  }

  return (
    <Button size="tiny" onPress={() => addToCart(course)}>
      Add to cart
    </Button>
  );
};

export default CartItemAction;
