import React, { forwardRef } from 'react';
import Link from 'next/link';
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

const StyledButton = styled(Box)<SystemProps>`
  appearance: none;
  display: inline-block;

  text-align: center;
  text-decoration: none;

  padding-top: ${({ theme }) => theme.sizes['2']};
  padding-bottom: ${({ theme }) => theme.sizes['2']};

  padding-right: ${({ theme }) => theme.sizes['3']};
  padding-left: ${({ theme }) => theme.sizes['3']};

  border: 0;
  border-radius: ${({ theme }) => theme.radii.xs};

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
        <StyledButton
          aria-disabled
          data-is-loading
          {...rest}
          as={Element}
          ref={ref}
        >
          loading
        </StyledButton>
      );
    }

    if (rest?.to) {
      return (
        <Link href={rest.to} passHref>
          <StyledButton {...rest} as={Element} ref={ref} />
        </Link>
      );
    }

    return <StyledButton {...rest} as={Element} ref={ref} />;
  },
);
