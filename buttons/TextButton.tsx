import React from 'react';
import {
  type GestureResponderEvent,
  type StyleProp,
  Text,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { Button } from './Button';

export type TextButtonProps = {
  titles: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const TextButton = (props: TextButtonProps) => {
  return (
    <Button onPress={props.onPress} style={props.style}>
      <Text style={props.textStyle}>{props.title}</Text>
    </Button>
  );
};

export default TextButton;
