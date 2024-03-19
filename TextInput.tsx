import React from 'react';
import { VStack } from './primatives/Stack';
import { Text, TextInput, type TextStyle, type ViewStyle } from 'react-native';

export type TextInputProps = {
  containerStyle: ViewStyle;
  errorStyle: TextStyle;
  textInputStyle: TextStyle;
  text: string;
  textChanged: () => void;
  errorMessage: string;
};

export const TextInputField = (props: TextInputProps) => {
  return (
    <VStack style={props.containerStyle}>
      <Text style={props.errorStyle}>{props.errorMessage}</Text>
      <TextInput
        value={props.text}
        onChangeText={() => props.textChanged()}
        style={props.textInputStyle}
      />
    </VStack>
  );
};
