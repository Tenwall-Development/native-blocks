import React, { useCallback, useEffect, useState } from 'react';
import { HStack, VStack } from './primatives/Stack';
import {
  StyleSheet,
  Text,
  View,
  type DimensionValue,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { withStyle } from './hoc/WithStyle';

import { type LayoutChangeEvent } from 'react-native';

export const useSize = (): [
  {
    height: number;
    width: number;
  },
  (event: LayoutChangeEvent) => void,
] => {
  const [size, setSize] = useState<{
    height: number;
    width: number;
  }>({ height: 0, width: 0 });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
};

type DayProps = {
  day: String;
  boxStyle?: ViewStyle;
  textStyle: TextStyle;
  width: Number;
};

const Day = (props: DayProps) => {
  useEffect(() => {
    console.log(JSON.stringify(props));
  });
  return (
    <VStack
      flexCross={false}
      flexMain={false}
      width={props.width as DimensionValue}
      height={30}
      style={props.boxStyle}
    >
      <Text style={props.textStyle}>{props.day}</Text>
    </VStack>
  );
};

type CalanderRowProps = {
  daysInRow: Number[];
  textStyle: TextStyle;
  boxStyle?: ViewStyle;
  daywidth: Number;
};

const CalanderRow = (props: CalanderRowProps) => {
  return (
    <HStack flexMain={false} flexCross={false}>
      {props.daysInRow.map((num, idx) => {
        return (
          <Day
            key={idx}
            day={`${num}`}
            textStyle={props.textStyle}
            boxStyle={props.boxStyle}
            width={props.daywidth}
          />
        );
      })}
    </HStack>
  );
};

type CalanderProps = {
  textStyle?: TextStyle;
  boxStyle?: ViewStyle;
};

export const Calander = (props: CalanderProps) => {
  const [size, setSize] = useState({ height: 0, width: 0 });
  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  const [dayWidth, setDayWidth] = useState(0);

  useEffect(() => {
    setDayWidth(size.width / 7);
    console.log('WIDTH ' + size.width);
  }, [size, onLayout]);

  return (
    <View style={styles.container} onLayout={onLayout}>
      <CalanderRow
        daysInRow={[1, 2, 3, 4, 5, 6, 7]}
        textStyle={props.textStyle!}
        boxStyle={props.boxStyle}
        daywidth={dayWidth}
      />
      <CalanderRow
        daysInRow={[1, 2, 3, 4, 5, 6, 7]}
        textStyle={props.textStyle!}
        boxStyle={props.boxStyle}
        daywidth={dayWidth}
      />
      <CalanderRow
        daysInRow={[1, 2, 3, 4, 5, 6, 7]}
        textStyle={props.textStyle!}
        boxStyle={props.boxStyle}
        daywidth={dayWidth}
      />
      <CalanderRow
        daysInRow={[1, 2, 3, 4, 5, 6, 7]}
        textStyle={props.textStyle!}
        boxStyle={props.boxStyle}
        daywidth={dayWidth}
      />
      <CalanderRow
        daysInRow={[1, 2, 3]}
        textStyle={props.textStyle!}
        boxStyle={props.boxStyle}
        daywidth={dayWidth}
      />
    </View>
  );
};

const makeStyle = (theme: any) => {
  return {
    textStyle: {
      color: theme.primary,
    },
    boxStyle: {
      backgroundColor: theme.background,
    },
  };
};

export const StyledCalander = withStyle<CalanderProps>(Calander, makeStyle);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    flexGrow: 1,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
  },
});
