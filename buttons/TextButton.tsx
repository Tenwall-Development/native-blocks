import React from 'react';
import {
  type GestureResponderEvent,
  type StyleProp,
  Text,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { Button } from './Button';

import { ButtonStyle, TextStyle as MyTextStyle } from '../../styles';
import { withStyle } from '../hoc/WithStyle';

export type TextButtonProps = {
  titles: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const TextButton = (props: TextButtonProps) => {
  return (
    <Button onPress={props.onPress} style={props.style}>
      <Text style={props.textStyle}>{props.titles}</Text>
    </Button>
  );
};

const makeStyle = (theme: any) => {
  return {
    style: {
      ...ButtonStyle.primary,
      backgroundColor: theme.primary,
    },
    textStyle: {
      ...MyTextStyle.h3,
      color: theme.secondary,
    },
  };
};

export const StyledTextButton = withStyle<TextButtonProps>(
  TextButton,
  makeStyle
);
