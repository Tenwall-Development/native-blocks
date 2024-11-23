import React, {FC} from 'react';
import {
  type GestureResponderEvent,
  type StyleProp,
  Text,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { Button } from './Button';
import { HStack } from '../primatives/Stack';

import { SvgProps } from 'react-native-svg';
import {Icon} from '../primatives/Icon'

export type CheckBoxProps = {
  titles: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  checkedBtnstyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  checkMark :  FC<SvgProps>;
  checked: boolean;
  iconSize: number | null;
  iconColor: string
};

export const CheckBox = (props: CheckBoxProps) => {
  return (
    <Button onPress={props.onPress} style={props.checked ? props.style : props.checkedBtnstyle}>
      <HStack>
      {
        props.checked ? (
          <Icon 
            SVGComponent={props.checkMark} 
            size={props.iconSize ?? 12} 
            color={props.iconColor} /> 
        ) : null
      }
      <Text style={props.textStyle}>{props.titles}</Text>
      </HStack>
    </Button>
  );
};
