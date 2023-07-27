import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './src/store';
import { CartScreen, HomeScreen } from './src/screens';

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};
