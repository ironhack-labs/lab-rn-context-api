import {View} from 'react-native';
import React from 'react';
import {Button, Text} from '@ui-kitten/components';
import {useProductContext} from '../context/ProductContext';
import {footerStyles} from '../theme/Footer.styles';

export const Footer = ({
  showCart,
  isCart,
}: {
  showCart?: () => void;
  isCart?: boolean;
}) => {
  const {total, showCartButton} = useProductContext();

  return (
    <View style={footerStyles.main}>
      <View style={footerStyles.section}>
        {showCartButton || isCart ? (
          <Button size="small" onPress={showCart}>
            {isCart ? 'Go back' : 'Cart'}
          </Button>
        ) : null}
      </View>
      <View style={[footerStyles.section, footerStyles.total]}>
        <Text>
          Total: <Text category="label">${total || '0.00'}</Text>
        </Text>
      </View>
    </View>
  );
};
