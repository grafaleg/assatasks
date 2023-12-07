import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from '@tanstack/react-query';
import {buildProvidersTree} from './lib/utils/buildProviderTree';

import {store} from './lib/redux/store';
import RootNavigator from './screens/RootNavigator';

const queryClient = new QueryClient();

const ProviderTree = buildProvidersTree([
  [ReduxProvider, {store}],
  [NavigationContainer, {}],
  [QueryClientProvider, {client: queryClient} as QueryClientProviderProps],
]);

export default function App() {
  return (
    <ProviderTree>
      <RootNavigator />
    </ProviderTree>
  );
}
