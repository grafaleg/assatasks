import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Tasks: undefined;
};

export type ScreenStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
