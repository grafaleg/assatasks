import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import AddTaskComponent from './AddTask';
import {Provider} from 'react-redux';
import {store} from '../../../../lib/redux/store';

const AddTask = () => {
  return (
    <Provider store={store}>
      <AddTaskComponent />
    </Provider>
  );
};

describe('AddTask', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<AddTask />);
    expect(getByTestId('addTaskButton')).toBeTruthy();
  });

  it('should initialize with isModalVisible set to false', () => {
    const {queryByText} = render(<AddTask />);
    expect(queryByText('Add New Task')).toBeFalsy();
  });

  it('should toggle the modal visibility when the button is clicked', () => {
    const {getByTestId, queryByText} = render(<AddTask />);
    expect(queryByText('Add New Task')).toBeFalsy();
    fireEvent.press(getByTestId('addTaskButton'));
    expect(queryByText('Add New Task')).toBeTruthy();
  });

  it('should dispatch addTask action with the entered task name when "Add" is clicked', () => {
    const {getByTestId, getByPlaceholderText, queryByText} = render(
      <AddTask />,
    );
    fireEvent.press(getByTestId('addTaskButton'));
    expect(queryByText('Add New Task')).toBeTruthy();

    fireEvent.changeText(getByPlaceholderText('New Task Name'), 'test task');
    fireEvent.press(getByTestId('addTaskButtonForm'));
    expect(store.getState().tasks.items).toContain('test task');
  });

  it('should display an error message when adding a task with a long name', () => {
    const {getByTestId, getByPlaceholderText, queryByText, getByText} = render(
      <AddTask />,
    );
    fireEvent.press(getByTestId('addTaskButton'));
    expect(queryByText('Add New Task')).toBeTruthy();

    fireEvent.changeText(getByPlaceholderText('New Task Name'), '');
    fireEvent.press(getByTestId('addTaskButtonForm'));
    expect(getByText('Please enter a task')).toBeTruthy();
  });

  it('should add the task to the Redux store when adding a task with special characters', () => {
    const {getByTestId, getByPlaceholderText, queryByText} = render(
      <AddTask />,
    );
    fireEvent.press(getByTestId('addTaskButton'));
    expect(queryByText('Add New Task')).toBeTruthy();

    fireEvent.changeText(getByPlaceholderText('New Task Name'), 'test task!');
    fireEvent.press(getByTestId('addTaskButtonForm'));
    expect(store.getState().tasks.items).toContain('test task!');
  });

  it('should trim leading/trailing spaces from the task name before adding to the Redux store', () => {
    const {getByTestId, getByPlaceholderText, queryByText} = render(
      <AddTask />,
    );
    fireEvent.press(getByTestId('addTaskButton'));
    expect(queryByText('Add New Task')).toBeTruthy();

    fireEvent.changeText(
      getByPlaceholderText('New Task Name'),
      '  test task  ',
    );
    fireEvent.press(getByTestId('addTaskButtonForm'));
    expect(store.getState().tasks.items).toContain('test task');
  });

  it('should close the modal when clicking on the close button', () => {
    const {getByTestId, queryByText} = render(<AddTask />);
    expect(queryByText('Add New Task')).toBeFalsy();
    fireEvent.press(getByTestId('addTaskButton'));
    expect(queryByText('Add New Task')).toBeTruthy();
    fireEvent.press(getByTestId('closeButton'));
    expect(queryByText('Add New Task')).toBeFalsy();
  });

  it('should clear the name of the task upon closing', () => {
    const {getByTestId, queryByText, getByPlaceholderText} = render(
      <AddTask />,
    );
    expect(queryByText('Add New Task')).toBeFalsy();
    fireEvent.press(getByTestId('addTaskButton'));
    expect(queryByText('Add New Task')).toBeTruthy();
    fireEvent.press(getByTestId('closeButton'));
    expect(queryByText('Add New Task')).toBeFalsy();
    fireEvent.press(getByTestId('addTaskButton'));
    expect(queryByText('Add New Task')).toBeTruthy();
    expect(getByPlaceholderText('New Task Name').props.value).toEqual('');
  });
});
