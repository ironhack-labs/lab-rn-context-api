import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { AppProvider } from './src/store';

// UI KItten
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Divider,
  IconRegistry,
  Layout,
  Text
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// Components
import Header from './src/components/Header';
import Content from './src/components/Content';
import Footer from './src/components/Footer';

export default () => (
  <AppProvider>
    <SafeAreaView style={styles.topArea} />
    <StatusBar barStyle="light-content" backgroundColor="rgb(21, 26, 48)" />
    <SafeAreaView style={styles.mainArea}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Layout style={styles.mainArea}>
          <Header />
          <Divider />
          <Content />
          <Divider />
          <Footer />
        </Layout>
      </ApplicationProvider>
    </SafeAreaView>
  </AppProvider>
);

const styles = StyleSheet.create({
  topArea: { flex: 0, backgroundColor: 'rgb(21, 26, 48)' },
  mainArea: {
    flex: 1,
    backgroundColor: 'rgb(21, 26, 48)'
  },

  card: {
    flex: 1
  }
});
