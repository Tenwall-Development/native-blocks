import React, { useEffect } from 'react';
import { HStack, VStack } from './primatives/Stack';
import { Text, type TextStyle, type ViewStyle } from 'react-native';
import { withStyle } from './hoc/WithStyle';

type DayProps = {
  day: String;
  boxStyle?: ViewStyle;
  textStyle: TextStyle;
};

const Day = (props: DayProps) => {
  return (
    <VStack
      flexCross={false}
      flexMain={false}
      width={20}
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
            boxStyle={{ backgroundColor: 'red' }}
          />
        );
      })}
    </HStack>
  );
};

type CalanderProps = {
  textStyle?: TextStyle;
};

export const Calander = (props: CalanderProps) => {
  useEffect(() => {
    console.log(JSON.stringify(props));
  });
  return (
    <VStack style={{ backgroundColor: '#000000' }} align="flex-start">
      <CalanderRow
        daysInRow={[1, 2, 3, 4, 5, 6, 7]}
        textStyle={props.textStyle!}
      />
      <CalanderRow
        daysInRow={[1, 2, 3, 4, 5, 6, 7]}
        textStyle={props.textStyle!}
      />
      <CalanderRow
        daysInRow={[1, 2, 3, 4, 5, 6, 7]}
        textStyle={props.textStyle!}
      />
      <CalanderRow
        daysInRow={[1, 2, 3, 4, 5, 6, 7]}
        textStyle={props.textStyle!}
      />
      <CalanderRow daysInRow={[1, 2, 3]} textStyle={props.textStyle!} />
    </VStack>
  );
};

const makeStyle = (theme: any) => {
  return {
    textStyle: {
      color: '#ffffff',
    },
  };
};

export const StyledCalander = withStyle<CalanderProps>(Calander, makeStyle);
