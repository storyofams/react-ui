import { DefaultTheme } from 'styled-components';
import {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  ResponsiveValue,
  ColorProps,
} from 'styled-system';

type CSS = React.CSSProperties;

export interface System
  extends LayoutProps<DefaultTheme>,
    ColorProps<DefaultTheme>,
    SpaceProps<DefaultTheme>,
    BackgroundProps<DefaultTheme>,
    BorderProps<DefaultTheme>,
    FlexboxProps<DefaultTheme>,
    GridProps<DefaultTheme>,
    PositionProps<DefaultTheme>,
    ShadowProps<DefaultTheme>,
    TypographyProps<DefaultTheme> {
  color?: keyof DefaultTheme['colors'];

  // CSS properties
  textDecoration?: ResponsiveValue<CSS['textDecoration']>;
  textTransform?: ResponsiveValue<CSS['textTransform']>;
  appearance?: ResponsiveValue<CSS['appearance']>;
  transform?: ResponsiveValue<CSS['transform']>;
  transformOrigin?: ResponsiveValue<CSS['transformOrigin']>;
  animation?: ResponsiveValue<CSS['animation']>;
  userSelect?: ResponsiveValue<CSS['userSelect']>;
  pointerEvents?: ResponsiveValue<CSS['pointerEvents']>;
  boxSizing?: ResponsiveValue<CSS['boxSizing']>;
  cursor?: ResponsiveValue<CSS['cursor']>;
  resize?: ResponsiveValue<CSS['resize']>;
  transition?: ResponsiveValue<CSS['transition']>;
  objectFit?: ResponsiveValue<CSS['objectFit']>;
  objectPosition?: ResponsiveValue<CSS['objectPosition']>;

  // Ellipsis alias
  wordBreak?: ResponsiveValue<CSS['wordBreak']>;
  overflowWrap?: ResponsiveValue<CSS['overflowWrap']>;
  whiteSpace?: ResponsiveValue<CSS['whiteSpace']>;

  // SVG color properties
  fill?: ColorProps['color'];
  stroke?: ColorProps['color'];

  bgAttachment?: ResponsiveValue<CSS['backgroundAttachment']>;
  shadow?: ResponsiveValue<keyof DefaultTheme['shadows']>;
  boxShadow?: ResponsiveValue<keyof DefaultTheme['shadows']>;

  // List properties
  listStyleType?: ResponsiveValue<CSS['listStyleType']>;
  listStylePosition?: ResponsiveValue<CSS['listStylePosition']>;
  listStyleImage?: ResponsiveValue<CSS['listStyleImage']>;
  listStyleImg?: ResponsiveValue<CSS['listStyleImage']>;
  listStylePos?: ResponsiveValue<CSS['listStylePosition']>;

  // Outline prop
  outline?: ResponsiveValue<CSS['outline']>;
  float?: ResponsiveValue<CSS['float']>;
  willChange?: ResponsiveValue<CSS['willChange']>;

  css?: any;
}

export type SystemProps<T = undefined> = T extends {}
  ? System & Omit<Omit<T, 'color'>, 'css' | 'ref'>
  : System;

export interface BaseProps extends SystemProps {}
