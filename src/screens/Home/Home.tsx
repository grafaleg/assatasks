import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenStackNavigationProps} from '../types';
import Button from '../../components/Button/Button';
import {theme} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.l,
    padding: theme.spacing.m,
  },
});

export default function Home() {
  const {navigate} = useNavigation<ScreenStackNavigationProps>();
  return (
    <View style={styles.container}>
      <Button testID="tasksButton" onPress={() => navigate('Tasks')}>
        Tasks
      </Button>
      <Button testID="listButton" onPress={() => navigate('List')}>
        List
      </Button>
    </View>
  );
}
