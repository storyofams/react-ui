import * as CSS from 'csstype';
import {
  AllSystemProps,
  createSystem,
  PseudoProps,
  SystemProp,
  background,
  typography,
  position,
  flexbox,
  shadow,
  border,
  layout,
  color,
  space,
  grid,
} from 'system-props';

const extraProps = {
  transform: true,
  textDecoration: true,
  transition: true,
  cursor: true,
} as const;

type BaseProps = AllSystemProps<'noprefix'> &
  {
    [k in keyof typeof extraProps]?: SystemProp<CSS.Properties[k]>;
  };

type Pseudo = PseudoProps<BaseProps>;

export interface SystemProps extends BaseProps, Pseudo {
  css?: any;
}

export const shouldForwardExtraProp = (prop: string) =>
  ['transform', 'transition', 'textDecoration', 'cursor'].indexOf(prop) === -1;

const _system = createSystem({
  strict: false,
  tokenPrefix: 'noprefix',
});

export const system = _system({
  ...color,
  ...border,
  ...background,
  ...flexbox,
  ...grid,
  ...shadow,
  ...position,
  ...layout,
  ...space,
  ...typography,
  ...extraProps,
});
