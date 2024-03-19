import React, { useContext, createContext, type FunctionComponent } from 'react';
import {
  type GestureResponderEvent,
  type StyleProp,
  Text,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { Button } from './Button';

const Theme = createContext({})

export type TextButtonProps = {
  titles: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const TextButton = (props: TextButtonProps) => {
  return (
    <Button onPress={props.onPress} style={props.style}>
      <Text style={props.textStyle}>{props.title}</Text>
    </Button>
  );
};

const withStyle = <P extends object>(ComponentToTheme: React.ComponentType<P>, styleFunction : any) => {

    const themeCtx = useContext(Theme)
    const styles   = styleFunction(themeCtx)

    return function StyledComponent(props : any){
      return (
        <ComponentToTheme 
          {...props} 
          {...styles}
        ></ComponentToTheme>
      )
    }
}

const makeStyle = (theme : any) =>{

  const props = {
    style: {
      color: theme.primary
    }
  }

  return props
}

export const StyledButton = withStyle<TextButtonProps>(TextButton, makeStyle)
