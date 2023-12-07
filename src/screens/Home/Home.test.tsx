import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import Home from './Home';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('Home Screen', () => {
  it('should render two buttons for navigating to "Tasks" and "List"', () => {
    const {getByText} = render(<Home />);
    const tasksButton = getByText('Tasks');
    const listButton = getByText('List');
    expect(tasksButton).toBeTruthy();
    expect(listButton).toBeTruthy();
  });

  it('should trigger navigation to corresponding screens when buttons are pressed', async () => {
    const {getByTestId} = render(<Home />);

    const tasksButton = getByTestId('tasksButton');
    fireEvent.press(tasksButton);
    expect(tasksButton).toBeTruthy();
    const taskScreen = await screen.findByText('Tasks');
    expect(taskScreen).toBeTruthy();

    const listButton = getByTestId('listButton');
    fireEvent.press(listButton);
    expect(listButton).toBeTruthy();
    const listScreen = await screen.findByText('List');
    expect(listScreen).toBeTruthy();
  });
});
