import React from 'react';
import Typography, {styles} from './Typography';
import {render} from '@testing-library/react-native';

it('should render text with default styles', () => {
  const {getByText} = render(<Typography>Default Text</Typography>);
  const textElement = getByText('Default Text');
  expect(textElement).toBeTruthy();
  expect(textElement.props.style).toEqual([styles.text]);
});

it("should render bold text when 'bold' prop is true", () => {
  const {getByText} = render(<Typography bold>Bold Text</Typography>);
  const textElement = getByText('Bold Text');
  expect(textElement).toBeTruthy();
  expect(textElement.props.style).toEqual([styles.text, styles.bold]);
});

it("should render heading text when 'heading' prop is true", () => {
  const {getByText} = render(<Typography heading>Heading Text</Typography>);
  const textElement = getByText('Heading Text');
  expect(textElement).toBeTruthy();
  expect(textElement.props.style).toEqual([styles.text, styles.heading]);
});

it('should render text with empty string as children', () => {
  const {getByText} = render(<Typography>{''}</Typography>);
  const textElement = getByText('');
  expect(textElement).toBeTruthy();
  expect(textElement.props.style).toEqual([styles.text]);
});

it('should render text with null as children', () => {
  const {getByText} = render(<Typography>{null}</Typography>);
  const textElement = getByText('');
  expect(textElement).toBeTruthy();
  expect(textElement.props.style).toEqual([styles.text]);
});

it('should render text with undefined as children', () => {
  const {getByText} = render(<Typography>{undefined}</Typography>);
  const textElement = getByText('');
  expect(textElement).toBeTruthy();
  expect(textElement.props.style).toEqual([styles.text]);
});
