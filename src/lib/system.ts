import { css } from 'styled-components';
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
import { SystemProps } from '~types/system';

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

const all = compose(
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
);

export const allPropNames = all.propNames;

export const system = (props: SystemProps) => css`
  ${all(props)}
`;
