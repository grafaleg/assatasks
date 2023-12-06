import React from 'react';
// import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from '@tanstack/react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {buildProvidersTree} from './src/lib/utils/buildProviderTree';
import {RootStackParamList} from './src/screens/types';
import Home from './src/screens/Home/Home';
import List from './src/screens/List/List';
import Tasks from './src/screens/Tasks/Tasks';

const queryClient = new QueryClient();
const RootStack = createNativeStackNavigator<RootStackParamList>();

const ProviderTree = buildProvidersTree([
  // [ReduxProvider, {}],
  [NavigationContainer, {}],
  [QueryClientProvider, {client: queryClient} as QueryClientProviderProps],
]);

export default function App() {
  return (
    <ProviderTree>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="List" component={List} />
        <RootStack.Screen name="Tasks" component={Tasks} />
      </RootStack.Navigator>
    </ProviderTree>
  );
}
