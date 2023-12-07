import React, {useReducer, useState} from 'react';
import {Modal, StyleSheet, TextInput, View} from 'react-native';
import Button from '../../../../components/Button/Button';
import {useDispatch} from 'react-redux';
import {StoreDispatch} from '../../../../lib/redux/store';
import {addTask} from '../../../../lib/redux/tasks/tasks';
import {theme} from '../../../../theme';
import Typography from '../../../../components/Typography/Typography';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.l,
    gap: theme.spacing.m,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    padding: theme.spacing.m,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.m,
  },
});

/**
 * Renders a modal for adding a new task.
 * Uses React hooks to manage state and Redux for dispatching actions.
 * The modal is toggled by a button, and when the user enters a task name and clicks the "Add" button, the task is added to the Redux store.
 *
 * @returns {JSX.Element} The AddTask component.
 */

export default function AddTask() {
  const [isModalVisible, toggleModalVisibility] = useReducer(
    currentValue => !currentValue,
    false,
  );
  const [text, setText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<StoreDispatch>();

  const handleAddTask = () => {
    if (!text.length) {
      setError('Please enter a task');
      return;
    }
    dispatch(addTask(text.trim()));
    setText('');
    setError(null);
    toggleModalVisibility();
  };

  const handleClose = () => {
    setText('');
    setError(null);
    toggleModalVisibility();
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={toggleModalVisibility}
        testID="addTask"
        presentationStyle="pageSheet">
        <View style={styles.modalContainer}>
          <Typography heading>Add New Task</Typography>
          <TextInput
            placeholder="New Task Name"
            onChangeText={setText}
            value={text}
            placeholderTextColor={theme.colors.textPrimary}
            style={styles.input}
          />
          <Button testID="addTaskButtonForm" onPress={handleAddTask}>
            Add
          </Button>
          <Button testID="closeButton" onPress={handleClose}>
            Close
          </Button>

          {error && <Typography>{error}</Typography>}
        </View>
      </Modal>

      <Button testID="addTaskButton" onPress={toggleModalVisibility}>
        New Task
      </Button>
    </>
  );
}
