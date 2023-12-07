import React from 'react';
import Home from './Home/Home';
import List from './List/List';
import Tasks from './Tasks/Tasks';
import {RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="List" component={List} />
      <RootStack.Screen name="Tasks" component={Tasks} />
    </RootStack.Navigator>
  );
}
