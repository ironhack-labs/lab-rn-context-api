import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ProductContextProvider} from './src/context/ProductContext';
import CartScreen from './src/screens/CartScreen';
import {appStyles} from './src/theme/App.styles';
import {HomeScreen} from './src/screens/HomeScreen';

export default () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <ProductContextProvider>
      <SafeAreaView style={appStyles.topArea} />
      <StatusBar barStyle="light-content" backgroundColor="rgb(21, 26, 48)" />
      <SafeAreaView style={appStyles.mainArea}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.dark}>
          <Layout style={appStyles.mainArea}>
            {!showCart ? (
              <>
                <HomeScreen setShowCart={() => setShowCart(true)} />
              </>
            ) : (
              <CartScreen hideCart={() => setShowCart(false)} />
            )}
          </Layout>
        </ApplicationProvider>
      </SafeAreaView>
    </ProductContextProvider>
  );
};
