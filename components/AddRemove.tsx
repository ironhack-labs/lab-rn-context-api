import {Button} from '@ui-kitten/components';
import {Product, useCart} from '../context/context';

export const RenderItemAccessory = (product: Product) => {
  const {dispatch} = useCart();
  const addToCart = () => {
    dispatch({type: 'ADD_TO_CART', payload: product});
  };

  const removeFromCart = () => {
    dispatch({type: 'REMOVE_FROM_CART', payload: product});
  };

  return product.added ? (
    <Button size="tiny" onPress={() => removeFromCart()}>
      Remove
    </Button>
  ) : (
    <Button size="tiny" onPress={() => addToCart()}>
      Add to cart
    </Button>
  );
};
