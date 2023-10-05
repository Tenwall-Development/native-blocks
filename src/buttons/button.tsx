import React, { type PropsWithChildren } from 'react';

import {
  Pressable,
  type ViewStyle,
  type StyleProp,
  type GestureResponderEvent,
} from 'react-native';

export type ButtonProps = {
  style: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <Pressable onPress={props.onPress} style={props.style}>
      {props.children}
    </Pressable>
  );
};
