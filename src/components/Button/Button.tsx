import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Typography from '../Typography/Typography';
import {theme} from '../../theme';
import {ButtonProps} from './types';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.bgPrimary,
    padding: theme.spacing.m,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    opacity: 1,
  },
});

/**
 * Renders a touchable button component.
 *
 * @param {ReactNode} children - The content to be displayed inside the button.
 * @param {function} onPress - The function to be called when the button is pressed.
 * @returns {JSX.Element} - The rendered touchable button component.
 */

export default function Button({children, onPress}: Readonly<ButtonProps>) {
  return (
    <TouchableOpacity testID="button" style={styles.button} onPress={onPress}>
      <Typography testID="buttonText">{children}</Typography>
    </TouchableOpacity>
  );
}
