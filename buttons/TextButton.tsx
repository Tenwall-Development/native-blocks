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
import { useTheme } from '../../context';

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

const withStyle = <P extends object>(
  ComponentToTheme: React.ComponentType<P>,
  styleFunction: any
) => {
  return function StyledComponent(props: P) {
    const themeCtx = useTheme();
    const styles = styleFunction(themeCtx);
    return <ComponentToTheme {...props} {...styles} />;
  };
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

export const StyledButton = withStyle<TextButtonProps>(TextButton, makeStyle);
