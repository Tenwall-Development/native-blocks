import React from 'react';
import type { FC } from 'react';
import { type ColorValue, type ViewStyle } from 'react-native';
import { type SvgProps } from 'react-native-svg';

export type IconProps = {
  SVGComponent: FC<SvgProps>;
  color?: ColorValue;
  size?: number;
  style?: ViewStyle;
};

export const Icon: FC<IconProps> = ({
  SVGComponent,
  color = 'black',
  size = 24,
  style,
}: IconProps) => {
  return (
    <SVGComponent color={color} width={size} height={size} style={style} />
  );
};
