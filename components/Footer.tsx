import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Text} from '@ui-kitten/components';
import {useAppContext} from '../context/appContext';

const Footer = ({
  showCart,
  isCart,
}: {
  showCart?: () => void;
  isCart?: boolean;
}) => {
  const {total, showCartButton} = useAppContext();

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        {/* TODO: Bonus Make it a button and switch between catalog and current cart */}
        {showCartButton || isCart ? (
          <Button size="small" onPress={showCart}>
            {isCart ? "Go back" : "Cart"}
          </Button>
        ) : null}
      </View>
      <View style={[styles.section, styles.total]}>
        <Text>
          Total: <Text category="label">${total || '0.00'}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Footer;

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
