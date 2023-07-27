import React from 'react';
import {View, StyleSheet} from 'react-native';

import Catalog from './Catalog';

const Content = () => {
  return (
    <View style={styles.container}>
      <Catalog />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
