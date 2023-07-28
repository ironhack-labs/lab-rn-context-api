import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

// UI KItten
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Divider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';


import Header from './src/components/Header';
import Content from './src/components/Content';
import Footer from './src/components/Footer';
import { CartProvider } from './src/context/CartContext';

export default () => (
  <>
    <SafeAreaView style={styles.topArea} />
    <StatusBar barStyle="light-content" backgroundColor="rgb(21, 26, 48)" />
    <SafeAreaView style={styles.mainArea}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Layout style={styles.mainArea}>
          <AppState>
            <Header />
            <Divider />
            <Content />
            <Divider />
            <Footer />
          </AppState>
        </Layout>
      </ApplicationProvider>
    </SafeAreaView>
  </>
);

const AppState = ({children}: {children: JSX.Element[]}) => {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
}

const styles = StyleSheet.create({
  topArea: {flex: 0, backgroundColor: 'rgb(21, 26, 48)'},
  mainArea: {
    flex: 1,
    backgroundColor: 'rgb(21, 26, 48)',
  },

  card: {
    flex: 1,
  },
});
