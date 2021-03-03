import {
  css as _css,
  CSSPseudoSelectorProps,
  CSSSelectorObject,
  EmotionLabel,
  SystemCssProperties,
  SystemStyleObject,
  VariantProperty,
} from '@styled-system/css';
import { DefaultTheme, css } from 'styled-components';
import {
  FlexboxProps,
  GridProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';
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
} from 'styled-system';
import { SystemProps } from '~types/custom-system';

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

export const system = (props: SystemProps) => css`
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

interface CustomUseThemeFunction {
  (theme: DefaultTheme): SystemStyleObject;
}

/** override for the css function */
export const customCss = (
  input?:
    | SystemCssProperties
    | SpaceProps<DefaultTheme>
    | TypographyProps<DefaultTheme>
    | FlexboxProps<DefaultTheme>
    | GridProps<DefaultTheme>
    | LayoutProps<DefaultTheme>
    | ColorProps<DefaultTheme>
    | CSSPseudoSelectorProps
    | CSSSelectorObject
    | VariantProperty
    | CustomUseThemeFunction
    | EmotionLabel
    | null
    | undefined,
) => _css(input);
