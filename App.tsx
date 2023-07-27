import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

// UI Kitten and other imports
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Divider} from '@ui-kitten/components';

// Import the CartProvider from the CartContext
import {CartProvider} from './components/context/CartContext';

// Components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <CartProvider>
      <>
        <SafeAreaView style={styles.topArea} />
        <StatusBar barStyle="light-content" backgroundColor="rgb(21, 26, 48)" />
        <SafeAreaView style={styles.mainArea}>
          <Header />
          <Divider />
          <Content />
          <Divider />
          <Footer />
        </SafeAreaView>
      </>
    </CartProvider>
  </ApplicationProvider>
);

const styles = StyleSheet.create({
  topArea: {flex: 0, backgroundColor: 'rgb(21, 26, 48)'},
  mainArea: {
    flex: 1,
    backgroundColor: 'rgb(21, 26, 48)',
  },
});
