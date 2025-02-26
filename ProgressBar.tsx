import React from 'react';
import { withStyle } from './hoc/WithStyle';
import {
  StyleSheet,
  Text,
  View,
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
      <View style={styles.stack}>
        <Text style={props.textStyle}>{(props.progressTextDisplay == 'percent') ? `${Math.round((props.progress / props.realMax) * 100)}%` : `${props.progress}/${props.realMax}`}</Text>

      </View>
      <HStack
        style={props.barStyle}
        width={`${(props.progress / props.realMax) * 100}%` as DimensionValue}
        flexMain={false}
        justifyContent="flex-start"
      >
      </HStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  stack:{
    position: 'absolute',
    left: 10,
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  }
})
 