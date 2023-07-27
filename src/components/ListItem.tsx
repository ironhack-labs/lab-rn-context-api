import { ListItem, Button } from '@ui-kitten/components';
import { DataT, useApp } from '../store';

type PropsT = {
  index: number;
  item: DataT;
};

const RemoveButton = ({
  onPress
}: {
  onPress: () => void;
}): React.ReactElement => (
  <Button size="tiny" onPress={onPress} status="danger">
    Remove
  </Button>
);

const AddButton = ({
  onPress
}: {
  onPress: () => void;
}): React.ReactElement => (
  <Button size="tiny" onPress={onPress}>
    Add to cart
  </Button>
);

export const CartItem = (props: PropsT): React.ReactElement => {
  const { addToCart, removeFromCart, cart } = useApp();
  const { index, item } = props;
  const { title, price, description, id } = item;
  const isItemInCart = cart.find((cartItem) => cartItem.id === id);

  const renderItemAccessory = (): React.ReactElement =>
    !isItemInCart ? (
      <AddButton onPress={() => addToCart(item)} />
    ) : (
      <RemoveButton onPress={() => removeFromCart(id)} />
    );

  return (
    <ListItem
      title={`${title} | $${price}`}
      description={`${description} ${index + 1}`}
      accessoryRight={renderItemAccessory}
    />
  );
};
