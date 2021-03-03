import { css, CSSProp, DefaultTheme } from 'styled-components';
import {
  system as styledSystem,
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
  Config,
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
  extends LayoutProps,
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

  height?: ResponsiveValue<CSS['height']>;
  width?: ResponsiveValue<CSS['width']>;

  // css?: CSSProp<DefaultTheme>;
  css?: any;
}

export interface BaseProps<
  AsElementType extends React.ElementType = React.ElementType
> extends SystemProps {
  as?: AsElementType;
  ref?: React.Ref<Element>;
}

// Introduce our own flavoured system
export const _customSystem: Config = {
  textDecoration: { property: 'textDecoration' },
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  objectFit: true,
  objectPosition: true,
  outline: true,
  float: true,
  willChange: true,
};

const customSystem = styledSystem(_customSystem);

export const system = (props) => {
  return css`
    ${compose(
      layout,
      color,
      space,
      background,
      border,
      grid,
      position,
      shadow,
      typography,
      flexbox,
      customSystem, // add our custom system on top of everything
    )(props)}
  `;
};

export type SystemProps<T = undefined> = T extends {}
  ? System & Omit<Omit<T, 'color'>, 'css'>
  : System;
