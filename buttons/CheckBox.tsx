





import React from 'react';
import {
  type GestureResponderEvent,
  type StyleProp,
  Text,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { Button } from './Button';

import { ButtonStyle, TextStyle as MyTextStyle } from '../../native_design';
import { withStyle } from '../hoc/WithStyle';
import { HStack } from '../primatives/Stack';


export type CheckBoxProps = {
  titles: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const CheckBox = (props: CheckBoxProps) => {
  return (
    <HStack>
        <Button onPress={props.onPress} style={props.style}>
        
        </Button>
        <Text style={props.textStyle}>{props.titles}</Text>
    </HStack>
  );
};

const makeStyle = (theme: any) => {
  return {
    style: {
      ...ButtonStyle.square,
      backgroundColor: "#11111100",
      borderWidth: 2,
      borderRadius: 2,
    },
    textStyle: {
      ...MyTextStyle.h2,
      color: theme.primary,
    },
  };
};

export const StyledCheckBox = withStyle<CheckBoxProps>(
    CheckBox,
    makeStyle
);

