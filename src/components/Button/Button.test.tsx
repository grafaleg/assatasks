import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Button, {styles} from './Button';

it('should render TouchableOpacity with correct style', () => {
  const {getByTestId} = render(<Button onPress={() => {}}>Button</Button>);
  const buttonWrapper = getByTestId('button');
  expect(buttonWrapper).toBeTruthy();
  expect(buttonWrapper.props.style).toEqual(styles.button);
});

it('should render Typography with correct children', () => {
  const children = 'Test Children';
  const {getByTestId} = render(<Button onPress={() => {}}>{children}</Button>);
  const textElement = getByTestId('buttonText');
  expect(textElement).toBeTruthy();
  expect(textElement.props.children).toEqual(children);
});

it('should call onPress function when TouchableOpacity is pressed', () => {
  const onPress = jest.fn();
  const {getByTestId} = render(<Button onPress={onPress}>Button</Button>);
  const buttonElement = getByTestId('button');
  fireEvent.press(buttonElement);
  expect(onPress).toHaveBeenCalled();
});

it('should not throw an error when onPress function is not passed', () => {
  expect(() => {
    render(<Button>Button</Button>);
  }).not.toThrow();
});
