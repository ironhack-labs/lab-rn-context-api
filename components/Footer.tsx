import { StyleSheet, View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';

//Context
import { useCart } from '../CartContext';

const Footer = () => {
  const { state } = useCart();

  const calculateTotal = () => {
    return state.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        <Button size="small">Cart</Button>
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total: <Text category="label">${calculateTotal().toFixed(2)}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 10,
  },
  section: {
    flex: 1,
  },
  total: {
    alignItems: 'flex-end',
  },
});

export default Footer;
