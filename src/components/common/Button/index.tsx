import React, {
  forwardRef,
  ElementType,
  ForwardedRef,
  ElementRef,
} from 'react';
import Link from 'next/link';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef,
} from 'react-polymorphic-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { system } from '~lib';
import { Box } from '~components/common/Box';
import { Spinner } from '~components/common/Spinner';
import { SystemProps } from '~types/system';

const _defaultElement = 'button';

const variants = {
  primary: {
    backgroundColor: 'primary500',
  },
  secondary: {
    backgroundColor: 'secondary500',
  },
  link: {
    textDecoration: 'underline',
  },
};

type CustomProps = {
  isLoading?: boolean;
  to?: string;
  variant?: keyof typeof variants;
} & SystemProps;

type Props<
  T extends ElementType = typeof _defaultElement
> = PolymorphicPropsWithRef<CustomProps, T>;

const StyledButton = styled.button`
  appearance: none;
  display: inline-block;

  text-align: center;
  text-decoration: none;

  padding-top: ${({ theme }) => theme.space['2']}px;
  padding-bottom: ${({ theme }) => theme.space['2']}px;

  padding-right: ${({ theme }) => theme.space['3']}px;
  padding-left: ${({ theme }) => theme.space['3']}px;

  border: 0;
  border-radius: ${({ theme }) => theme.radii.xs};

  &:hover {
    opacity: 0.75;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:active {
    box-shadow: none;
  }

  &[data-is-loading] {
    cursor: wait;
  }

  ${variant({ variants })}
  ${(props) => props.css}
  ${system}
`;

export const Button: PolymorphicForwardRefExoticComponent<
  CustomProps,
  typeof _defaultElement
> = forwardRef(function Button<
  AsElement extends ElementType = typeof _defaultElement
>(
  props: PolymorphicPropsWithoutRef<Props, AsElement>,
  ref: ForwardedRef<ElementRef<AsElement>>,
) {
  if (props?.isLoading) {
    return (
      // @ts-ignore
      <StyledButton
        {...props}
        ref={ref}
        position="relative"
        aria-disabled
        data-is-loading
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Spinner />
        </Box>
        <Box display="flex" color="transparent">
          {props?.children}
        </Box>
      </StyledButton>
    );
  }

  if (props?.to) {
    return (
      <Link href={props.to} passHref>
        {/* @ts-ignore */}
        <StyledButton {...props} ref={ref} />
      </Link>
    );
  }

  // @ts-ignore
  return <StyledButton {...props} ref={ref} />;
});
