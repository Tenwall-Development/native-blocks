import React, {type ReactChildren } from 'react';
import { Pressable, type ViewStyle, type StyleProp, type GestureResponderEvent } from 'react-native';

export type ButtonProps = {
    style: StyleProp<ViewStyle>,
    onPress : ((event: GestureResponderEvent) => void) ,
    children  : ReactChildren
}

export const Button = ({onPress, style, children} : ButtonProps) => {
  return <Pressable onPress={onPress} style={style}>{children}</Pressable>
};
