/* istanbul ignore file */
import {
  CSSPseudoSelectorProps,
  CSSSelectorObject,
  EmotionLabel,
  SystemCssProperties,
  VariantProperty,
  CSSObject,
} from '@styled-system/css';
import { DefaultTheme } from 'styled-components';
import {
  FlexboxProps,
  GridProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';

/**
 * DISCLAIMER:
 * This file is a copy of the original (https://github.com/styled-system/styled-system/blob/master/packages/css/src/index.js)
 *
 * The only adjustment that has been made is the typings in the css function as I couldn't get a declaration file to override a the SystemStyleObject
 */

// based on https://github.com/developit/dlv
// @ts-ignore
export const get = (obj, key, def, p, undef) => {
  key = key && key.split ? key.split('.') : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};

const defaultBreakpoints = [40, 52, 64].map((n) => n + 'em');

const defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
};

const aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY',
};

const multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height'],
};

const scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors',
};

// @ts-ignore
const positiveOrNegative = (scale, value) => {
  if (typeof value !== 'number' || value >= 0) {
    // @ts-ignore
    return get(scale, value, value);
  }
  const absolute = Math.abs(value);
  // @ts-ignore
  const n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

const transforms = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'top',
  'bottom',
  'left',
  'right',
].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: positiveOrNegative,
  }),
  {},
);

// @ts-ignore
export const responsive = (styles) => (theme) => {
  const next = {};
  // @ts-ignore
  const breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
  const mediaQueries = [
    null,
    // @ts-ignore
    ...breakpoints.map((n) => `@media screen and (min-width: ${n})`),
  ];

  for (const key in styles) {
    const value =
      typeof styles[key] === 'function' ? styles[key](theme) : styles[key];

    if (value == null) continue;
    if (!Array.isArray(value)) {
      // @ts-ignore
      next[key] = value;
      continue;
    }
    for (let i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      const media = mediaQueries[i];
      if (!media) {
        // @ts-ignore
        next[key] = value[i];
        continue;
      }
      // @ts-ignore
      next[media] = next[media] || {};
      if (value[i] == null) continue;
      // @ts-ignore
      next[media][key] = value[i];
    }
  }

  return next;
};

type SystemStyleObject =
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
  | null;
interface CustomUseThemeFunction {
  (theme: DefaultTheme): SystemStyleObject;
}

type CssFunctionReturnType = (
  props?: DefaultTheme | { theme: DefaultTheme },
) => CSSObject;

type CssFunction = (input?: SystemStyleObject) => CssFunctionReturnType;

// @ts-ignore
export const css: CssFunction = (args: SystemStyleObject) => (props = {}) => {
  // @ts-ignore
  const theme = { ...defaultTheme, ...(props?.theme || props) };
  let result = {};
  const obj = typeof args === 'function' ? args(theme) : args;
  const styles = responsive(obj)(theme);

  for (const key in styles) {
    // @ts-ignore
    const x = styles[key];
    const val = typeof x === 'function' ? x(theme) : x;

    if (key === 'variant') {
      // @ts-ignore
      const variant = css(get(theme, val))(theme);
      result = { ...result, ...variant };
      continue;
    }

    if (val && typeof val === 'object') {
      // @ts-ignore
      result[key] = css(val)(theme);
      continue;
    }

    // @ts-ignore
    const prop = get(aliases, key, key);
    // @ts-ignore
    const scaleName = get(scales, prop);
    // @ts-ignore
    const scale = get(theme, scaleName, get(theme, prop, {}));
    // @ts-ignore
    const transform = get(transforms, prop, get);
    const value = transform(scale, val, val);

    // @ts-ignore
    if (multiples[prop]) {
      // @ts-ignore
      const dirs = multiples[prop];

      for (let i = 0; i < dirs.length; i++) {
        // @ts-ignore
        result[dirs[i]] = value;
      }
    } else {
      // @ts-ignore
      result[prop] = value;
    }
  }

  return result;
};

export default css;
