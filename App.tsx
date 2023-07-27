import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {
  ApplicationProvider,
  Divider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

//Context
import {CartProvider} from './CartContext';

//Componentes
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Cart from './components/Cart';

export default () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.topArea} />
      <StatusBar barStyle="light-content" backgroundColor="rgb(21, 26, 48)" />
      <SafeAreaView style={styles.mainArea}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.dark}>
          <CartProvider>
            <Layout style={styles.mainArea}>
              <Header />
              <Divider />
              {showCart ? <Cart /> : <Content />}
              <Divider />
              <Footer
                onCartButtonClick={() => setShowCart(!showCart)}
                showCart={showCart}
              />
            </Layout>
          </CartProvider>
        </ApplicationProvider>
      </SafeAreaView>
    </>
  );
};

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
