import React from 'react';
import {render} from '@testing-library/react-native';
import ContactItem from './ContactItem';

describe('ContactItem', () => {
  it('should render contact item with name and avatar image', () => {
    const name = 'John Doe';
    const avatar = 'https://example.com/avatar.jpg';

    const {getByText, getByTestId} = render(
      <ContactItem name={name} avatar={avatar} />,
    );

    expect(getByText(name)).toBeTruthy();
    expect(getByTestId('avatarImage')).toBeTruthy();
  });

  it('should render contact item with first letter of name when no avatar image is available', () => {
    const name = 'John Doe';

    const {getByText, queryByTestId} = render(
      <ContactItem name={name} avatar={null} />,
    );

    expect(getByText(name.charAt(0))).toBeTruthy();
    expect(queryByTestId('avatarImage')).toBeNull();
  });

  it('should render contact item with empty name and no avatar image', () => {
    const {getByTestId, queryByTestId} = render(
      <ContactItem name="" avatar={null} />,
    );

    expect(getByTestId('name')).toBeTruthy();
    expect(queryByTestId('avatarImage')).toBeNull();
  });

  it('should render contact item with very long name and no avatar image', () => {
    const name = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    const {getByText, queryByTestId} = render(
      <ContactItem name={name} avatar={null} />,
    );

    expect(getByText(name)).toBeTruthy();
    expect(queryByTestId('avatarImage')).toBeNull();
  });

  it('should render contact item with very long name and very large avatar image', () => {
    const name = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const avatar = 'https://example.com/avatar.jpg';

    const {getByText, getByTestId} = render(
      <ContactItem name={name} avatar={avatar} />,
    );

    expect(getByText(name)).toBeTruthy();
    expect(getByTestId('avatarImage')).toBeTruthy();
  });

  it('should render contact item with very short name and no avatar image', () => {
    const name = 'J';

    const {getByTestId, queryByTestId} = render(
      <ContactItem name={name} avatar={null} />,
    );

    expect(getByTestId('name')).toBeTruthy();
    expect(queryByTestId('avatarImage')).toBeNull();
  });
});
