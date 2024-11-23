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
import { Box } from '../primatives/Box';

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
    <Button onPress={props.onPress}>
      <HStack>
        <Box style={props.checked ? props.style : props.checkedBtnstyle}>
        {
          props.checked ? (
            <Icon 
              SVGComponent={props.checkMark} 
              size={props.iconSize ?? 12} 
              color={props.iconColor} /> 
          ) : null
        }
        </Box>
      <Text style={props.textStyle}>{props.titles}</Text>
      </HStack>
    </Button>
  );
};
