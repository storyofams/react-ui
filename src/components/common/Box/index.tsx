import * as React from 'react';
import styled from 'styled-components';
import { BaseProps, system, SystemProps } from '~lib/styledSystem';

export type BoxOwnProps<
  AsElementType extends React.ElementType = React.ElementType
> = BaseProps<AsElementType>;

export type BoxProps<
  AsElementType extends React.ElementType
> = BoxOwnProps<AsElementType> &
  Omit<React.ComponentProps<AsElementType>, keyof BoxOwnProps>;

const defaultElement = 'div';

const Polymorph = styled.div<SystemProps>`
  font-family: inherit;

  /** enable css prop; use this with styled-system */
  ${(props) => props?.css}

  && {
    ${system}
  }
`;

export const Box: <
  AsElementType extends React.ElementType = typeof defaultElement
>(
  props: BoxProps<AsElementType>,
) => React.ReactElement | null = React.forwardRef(
  (props: BoxOwnProps, ref: React.Ref<Element>) => (
    <Polymorph {...props} as={props.as || defaultElement} ref={ref} />
  ),
);
