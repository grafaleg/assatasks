import React from 'react';
import {Text} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {buildProvidersTree} from './src/lib/utils/buildProviderTree';

const ProviderTree = buildProvidersTree([]);

export default function App() {
  return <Text>App</Text>;
}
