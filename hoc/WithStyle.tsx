import React from 'react';
import { useTheme } from '../../context';

export const withStyle = <P extends object>(
  ComponentToTheme: React.ComponentType<P>,
  styleFunction: any
) => {
  return function StyledComponent(props: P) {
    const themeCtx = useTheme();
    const styles = styleFunction(themeCtx);

    const properties = Object.getOwnPropertyNames(styles);

    console.log("properties " + JSON.stringify(properties))

    properties.map((item) => {
      const propsIDX = Object.keys(props).indexOf(item);
      if (propsIDX >= 0) {
        const passed_style = (props as any)[item];

        let newStyle = { ...styles[item] };

        for (const [key, value] of Object.entries(passed_style)) {
          newStyle[key] = value;
        }

        styles[item] = newStyle;
      }
    });

    return <ComponentToTheme {...props} {...styles} />;
  };
};
