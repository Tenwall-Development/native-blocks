import React, { type PropsWithChildren } from 'react';

import {
  Pressable,
  type ViewStyle,
  type StyleProp,
  type GestureResponderEvent,
} from 'react-native';
import { ButtonStyle } from '../../native_design';
import { withStyle } from '../hoc/WithStyle';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <Pressable onPress={props.onPress} style={props.style}>
      {props.children}
    </Pressable>
  );
};

const makeStyle = (theme: any) => {
  return {
    style: {
      ...ButtonStyle.primary,
      backgroundColor: theme.background,
    },
  };
};

export const StyledButton = withStyle<ButtonProps>(Button, makeStyle);
