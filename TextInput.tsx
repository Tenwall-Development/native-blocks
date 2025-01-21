import React from 'react';
import { VStack } from './primatives/Stack';
import { Text, TextInput, type TextStyle, type ViewStyle } from 'react-native';

export type TextInputProps = {
  containerStyle?: ViewStyle;
  errorStyle?: TextStyle;
  textInputStyle?: TextStyle;
  text: string;
  textChanged: (text : string) => void;
  errorMessage: string;
};

export const TextInputField = (props: TextInputProps) => {

  console.log(props.textInputStyle)

  return (
    <VStack height={50} flexMain={false}>
      <Text style={props.errorStyle}>{props.errorMessage}</Text>
      <VStack style={props.containerStyle} height={50} flexMain={false}>
      <TextInput
        value={props.text}
        onChangeText={props.textChanged}
        style={props.textInputStyle}
      />
      </VStack>
    </VStack>
  );
};

import { InputStyle, TextStyle as MyTextStyle } from '../native_design';
import { withStyle } from './hoc/WithStyle';

const makeStyle = (theme: any) => {
  return {
    containerStyle: {
      ...InputStyle.PrimaryInputStyle,
      backgroundColor: theme.background,
    },
    textInputStyle: {
      ...MyTextStyle.h3,
      color: "#FFFFFF",
    },
    errorStyle:{
      
    }
  };
};

export const StyledTextInputField = withStyle<TextInputProps>(
  TextInputField,
  makeStyle
);