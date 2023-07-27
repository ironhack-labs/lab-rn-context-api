import {Text} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {headerStyles} from '../theme/Header.styles';

export const Header = () => (
  <View style={headerStyles.container}>
    <Text category="h1">LAB Context</Text>
  </View>
);
