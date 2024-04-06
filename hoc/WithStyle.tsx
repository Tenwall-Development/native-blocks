import React from 'react';
import { useTheme } from '../../context';

export const withStyle = <P extends object>(
    ComponentToTheme: React.ComponentType<P>,
    styleFunction: any
  ) => {
    return function StyledComponent(props: P) {
      const themeCtx = useTheme();
      const styles = styleFunction(themeCtx)
      return <ComponentToTheme {...props} {...styles} />;
    };
};
