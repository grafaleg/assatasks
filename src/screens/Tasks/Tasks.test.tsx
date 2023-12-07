import React from 'react';
import {render} from '@testing-library/react-native';
import TasksScreen from './Tasks';
import {Provider} from 'react-redux';
import {store} from '../../lib/redux/store';

const Tasks = () => {
  return (
    <Provider store={store}>
      <TasksScreen />
    </Provider>
  );
};

describe('Tasks Screen', () => {
  it('should render an AddTask component', () => {
    const {getByTestId} = render(<Tasks />);
    const addTaskComponent = getByTestId('addTask');
    expect(addTaskComponent).toBeTruthy();
  });

  it('should render a FlatList component with tasks data, list style, separator component and renderItem prop', () => {
    const {getByTestId, getByText} = render(<Tasks />);

    const flatListComponent = getByTestId('flatListTasks');
    expect(flatListComponent).toBeTruthy();
    expect(getByText('Task 1')).toBeTruthy();
  });
});
