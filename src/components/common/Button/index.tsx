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
import { ResponsiveValue, variant } from 'styled-system';

import { system } from '~lib';
import { Box } from '~components/common/Box';
import { Spinner } from '~components/common/Spinner';
import { allPropNames } from '~lib/system';
import { SystemProps } from '~types/system';

const _defaultElement = 'button';

const sizes = {
  small: {
    fontSize: 1.5,
  },
  medium: {
    fontSize: 2,
    lineHeight: 'medium',
  },
  large: {
    fontSize: 2.5,
    px: 4,
    lineHeight: 'high',
  },
};

const variants = {
  primary: {
    px: 3,
    py: 1.5,
    bg: 'primary600',
    color: 'primary50',
    fontWeight: 'bold',
    fontSize: 1.5,
    lineHeight: 'medium',

    '&:hover': {
      bg: 'primary700',
      color: 'primary50',
      opacity: 1,
    },

    '&:active': {
      bg: 'primary600',
      boxShadow: '0px 0px 0px 4px #BAE6FD',
      color: 'primary50',
    },

    '&:disabled': { cursor: 'not-allowed', opacity: 0.25 },
  },
  secondary: {
    px: 3,
    py: 1.5,
    bg: 'primary200',
    color: 'primary700',
    fontWeight: 'bold',
    fontSize: 1.5,
    lineHeight: 'medium',

    '&:hover': {
      bg: 'primary300',
      color: 'primary800',
      opacity: 1,
    },

    '&:active': {
      color: 'primary700',
      bg: 'primary200',
      boxShadow: '0px 0px 0px 4px #E0F2FE',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.25,
    },
  },
  link: {
    color: 'grey700',

    '&:hover, &:active': {
      color: 'primary700',
      opacity: 1,
    },
  },
  underline: {
    color: 'grey900',
    fontWeight: 'medium',
    userSelect: 'none',

    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: '-2px',
      left: '50%',
      right: '50%',
      height: '2px',
      bg: 'primary700',
      transition: 'left 0.18s ease-in-out, right 0.18s ease-in-out',
    },

    '&:hover, &:active': {
      color: 'primary700',
      opacity: 1,

      '&::before': {
        left: 0,
        right: 0,
      },
    },
  },
};

type CustomProps = {
  isLoading?: boolean;
  to?: string | undefined;
  variant?: ResponsiveValue<keyof typeof variants>;
  buttonSize?: ResponsiveValue<keyof typeof sizes>;
} & SystemProps;

type Props<
  T extends ElementType = typeof _defaultElement
> = PolymorphicPropsWithRef<CustomProps, T>;

const StyledButton = styled(_defaultElement).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ['buttonSize', ...allPropNames].indexOf(prop) === -1 &&
    defaultValidatorFn(prop),
})`
  position: relative;

  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: inherit;

  text-align: center;
  text-decoration: none;

  border: 0;
  border-radius: ${({ theme }) => theme.radii.sm};

  transition: background-color 0.18s ease-in-out, box-shadow 0.18s,
    border-color 0.18s ease-in-out, color 0.18s ease-in-out,
    opacity 0.18s ease-in-out;

  &:hover {
    opacity: 0.75;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:active {
    box-shadow: none;
  }

  &[data-is-loading] {
    cursor: wait;
  }

  ${variant({ variants })}
  ${variant({ prop: 'buttonSize', variants: sizes })}
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
