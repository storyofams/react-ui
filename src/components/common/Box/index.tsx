import * as React from 'react';
import styled from 'styled-components';
import { BaseProps, system } from '~lib/styledSystem';

export type BoxOwnProps<
  AsElementType extends React.ElementType = React.ElementType
> = BaseProps<AsElementType>;

export type BoxProps<
  AsElementType extends React.ElementType
> = BoxOwnProps<AsElementType> &
  Omit<React.ComponentProps<AsElementType>, keyof BoxOwnProps>;

const defaultElement = 'div';

const Polymorph = styled.div`
  font-family: inherit;
  ${system}
`;

export const Box: <
  AsElementType extends React.ElementType = typeof defaultElement
>(
  props: BoxProps<AsElementType>,
) => React.ReactElement | null = React.forwardRef(
  (props: BoxOwnProps, ref: React.Ref<Element>) => {
    const Element = props.as || defaultElement;

    return <Polymorph as={Element} ref={ref} {...props} />;
  },
);
