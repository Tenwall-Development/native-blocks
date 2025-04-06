# Native Blocks

A headless, theme reactive UI library that gives you complete control.

## Usage

### Basic Example

Create custom component file in your components folder.
/components/TextButton

Import component to style and all necessary hooks

```typescript
import {
    TextButton as TB,
    TextButtonProps,
} from "../native_blocks/buttons/TextButton";
import { withStyle } from "../native_blocks/hoc/WithStyle";
import { ButtonStyle, TextStyle } from "../native_design";
```

Create makeStyle function to create your custom style
theme prop is automatically reactive and updates to theme changes

```typescript
const makeStyle = (theme: any) => {
    return {
        style: {
            ...ButtonStyle.primary,
            backgroundColor: theme.primary,
        },
        textStyle: {
            ...TextStyle.h3,
            color: "white",
        },
    };
};
```

Export your custom styled component

```typescript
export const TextButton = withStyle<TextButtonProps>(TB, makeStyle);
```

Use in App

```typescript
const App = () => {
    const StartRoutine = () => {
        console.log("Starting routine...");
    };
    return (
        <VStack>
            <TextButton title='Start' onPress={() => StartRoutine()} />
        </VStack>
    );
};
```

### Components

#### Button

```typescript
import { Button, ButtonProps } from "../native_blocks/buttons/Button";

const makeStyle = (theme: any) => {
    return {
        style: {
            ...ButtonStyle.primary,
            backgroundColor: theme.background,
        },
    };
};

export const StyledButton = withStyle<ButtonProps>(Button, makeStyle);
```

#### CheckBox

```typescript
import {
    CheckBox as CB,
    CheckBoxProps,
} from "../native_blocks/buttons/CheckBox";
import { ButtonStyle, TextStyle as MyTextStyle } from "../native_design";
import { withStyle } from "../native_blocks/hoc/WithStyle";

const makeStyle = (theme: any) => {
    return {
        style: {
            ...ButtonStyle.square,
            backgroundColor: theme.background,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: theme.background,
        },
        checkedBtnstyle: {
            ...ButtonStyle.square,
            backgroundColor: theme.primary,
            // borderWidth: 1,
            // borderRadius: 2,
            ZStack: 1,
        },
        textStyle: {
            ...MyTextStyle.h3,
            color: theme.primary,
            margin: 4,
        },
    };
};

export const CheckBox = withStyle<CheckBoxProps>(CB, makeStyle);
```

#### TextButton

```typescript
import {
    TextButton as TB,
    TextButtonProps,
} from "../native_blocks/buttons/TextButton";
import { withStyle } from "../native_blocks/hoc/WithStyle";
import { ButtonStyle, TextStyle } from "../native_design";

const makeStyle = (theme: any) => {
    return {
        style: {
            ...ButtonStyle.primary,
            backgroundColor: theme.primary,
        },
        textStyle: {
            ...TextStyle.h3,
            color: "white",
        },
    };
};

export const TextButton = withStyle<TextButtonProps>(TB, makeStyle);
```

### Basic Primatives

#### Box

Box options:

-   style
-   align?: FlexAlignType;
-   justifyContent: 'flex-start'| 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
-   m?: number;
-   p?: number;
-   mVH?: SpacingVH;
-   pVH?: SpacingVH;
-   mAll?: SpacingAll;
-   pAll?: SpacingAll;
-   flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
-   rowGap?: number;
-   colGap?: number;
-   gap?: number;
-   flexMain?: boolean;
-   flexCross?: boolean;
-   height?: DimensionValue;
-   width?: DimensionValue;
-   onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
-   flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;

#### VStack, HStack

```typescript
<VStack>
    <View>These</View>
    <View>will</View>
    <View>be vertically</View>
    <View>stacked</View>
</VStack>
```

```typescript
<HStack>
    <View>These</View>
    <View>will</View>
    <View>be horizontally</View>
    <View>stacked</View>
</HStack>
```

#### Icon

```typescript
import checkMark from "../assets/check.svg";
<Icon
    SVGComponent={checkMark}
    size={12}
    color={iconColor}
    style={{ zIndex: 2 }}
/>;
```

## Installation

This lets modify core structure of components
Giving you a solid starting point but keeping complete control

```bash
git submodule add git@github.com:Tenwall-Development/native-blocks.git
```
