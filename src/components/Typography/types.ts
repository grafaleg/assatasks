import {TextProps} from 'react-native';

export interface TypographyProps extends TextProps {
  bold?: boolean;
  heading?: boolean;
  children: React.ReactNode;
}
