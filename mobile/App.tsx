import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

const GamerDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#7c5cff',
    background: '#0f0f1a',
    card: '#0f0f1a',
    text: '#e8e8f0',
    border: '#1a1a2e',
    notification: '#7c5cff',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={GamerDarkTheme}>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f1a" />
      <AppNavigator />
    </NavigationContainer>
  );
}
