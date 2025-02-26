import React from 'react';
import { withStyle } from './hoc/WithStyle';
import {
  Text,
  type DimensionValue,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { HStack } from './primatives/Stack';



export type ProgressBarProps = {
  backgroundStyle?: ViewStyle;
  barStyle?: ViewStyle;
  textStyle?: TextStyle;
  height?: DimensionValue;
  progress: number;
  progressTextDisplay: 'percent' | 'out-of';
  realMax: number;
}

export const ProgessBar = (props: ProgressBarProps) => {
  return (
    <HStack
      style={props.backgroundStyle}
      height={props.height}
      flexMain={props.height === undefined}
      justifyContent="flex-start"
    >
      <HStack
        style={props.barStyle}
        width={`${(props.progress / props.realMax) * 100}%` as DimensionValue}
        flexMain={false}
        justifyContent="flex-start"
      >
        <Text style={props.textStyle}>{(props.progressTextDisplay == 'percent') ? `${Math.round((props.progress / props.realMax) * 100)}%` : `${props.progress}/${props.realMax}`}</Text>
      </HStack>
    </HStack>
  );
};