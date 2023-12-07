import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import AddTask from './elements/AddTask/AddTask';
import {theme} from '../../theme';
import {useSelector} from 'react-redux';
import {RootState} from '../../lib/redux/store';
import Typography from '../../components/Typography/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.l,
    gap: theme.spacing.m,
  },
  list: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: theme.spacing.l,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.primary,
    marginVertical: theme.spacing.m,
    width: '100%',
  },
});

const Separator = () => <View style={styles.separator} />;

export default function Tasks() {
  const tasks = useSelector<RootState, string[]>(state => state.tasks.items);
  return (
    <View style={styles.container}>
      <AddTask />
      <FlatList
        data={tasks}
        style={styles.list}
        testID="flatListTasks"
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => <Typography>{item}</Typography>}
      />
    </View>
  );
}
