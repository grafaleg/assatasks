import React, {useMemo} from 'react';
import {Text, StyleSheet, TextStyle, StyleProp} from 'react-native';
import {theme} from '../../theme';
import {TypographyProps} from './types';

export const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
  bold: {
    fontWeight: 'bold',
  },
  heading: {
    fontSize: theme.fontSizes.heading,
  },
});

/**
 * Renders a <Text> component with customizable styles based on the props.
 *
 * @param {boolean} bold - Determines whether the text should be bold or not.
 * @param {boolean} heading - Determines whether the text should have a heading style or not.
 * @param {ReactNode} children - The content to be rendered inside the <Typography> component.
 * @returns {JSX.Element} - The rendered <Text> component.
 */

export default function Typography({
  bold,
  heading,
  children,
  ...props
}: Readonly<TypographyProps>) {
  const typographyStyles = useMemo(() => {
    const baseStyles: StyleProp<TextStyle>[] = [styles.text];
    if (bold) {
      baseStyles.push(styles.bold);
    }
    if (heading) {
      baseStyles.push(styles.heading);
    }
    return baseStyles;
  }, [bold, heading]);

  return (
    <Text {...props} style={typographyStyles}>
      {children}
    </Text>
  );
}
