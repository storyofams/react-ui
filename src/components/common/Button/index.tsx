import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { system } from '~lib';

import { Box } from '~components/common/Box';

import { BaseProps, SystemProps } from '~types/system';

const _defaultElement = 'button';

/** add custom button properties here */
export type ButtonOwnProps<
  AsElementType extends React.ElementType = React.ElementType
> = {
  isLoading?: boolean;
  to?: string;
} & BaseProps<AsElementType>;

export type ButtonProps<
  AsElementType extends React.ElementType
> = ButtonOwnProps<AsElementType> &
  Omit<React.ComponentProps<AsElementType>, keyof ButtonOwnProps>;

const StyledCssButton = styled(Box).attrs((props) => ({
  px: 3,
  py: 2,
  borderRadius: 'xs',
  ...props,
}))<SystemProps>`
  appearance: none;
  display: inline-block;

  text-align: center;
  text-decoration: none;

  &:hover {
    opacity: 0.74;
  }

  ${(props) => props.css}
  ${system}
`;

export const Button: <
  AsElementType extends React.ElementType = typeof _defaultElement
>(
  props: ButtonProps<AsElementType>,
) => React.ReactElement | null = forwardRef(
  ({ as, ...rest }: ButtonOwnProps, ref: React.Ref<Element>) => {
    const Element = as || _defaultElement;

    if (rest?.isLoading) {
      return (
        <StyledCssButton
          aria-disabled
          data-is-loading
          {...rest}
          as={Element}
          ref={ref}
        >
          loading
        </StyledCssButton>
      );
    }

    return <StyledCssButton {...rest} as={Element} ref={ref} />;
  },
);
