import React, {
  forwardRef,
  ElementType,
  ForwardedRef,
  ElementRef,
  ReactNode,
} from 'react';
import Link from 'next/link';
import type { PolymorphicForwardRefExoticComponent } from 'react-polymorphic-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { SystemProps, StyledConfigType } from '~lib';
import { Box } from '~components/common/Box';
import { Spinner } from '~components/common/Spinner';

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

type CustomProps = SystemProps & {
  isLoading?: boolean;
  to?: string | undefined;
  variant?: keyof typeof variants;
  buttonSize?: keyof typeof sizes;
  disabled?: boolean;
  children: ReactNode;
};

const StyledButton = styled(Box).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ['buttonSize'].indexOf(prop) === -1 && defaultValidatorFn(prop),
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
`;

/** @ts-expect-error */
export const Button: PolymorphicForwardRefExoticComponent<
  CustomProps,
  typeof _defaultElement
> &
  StyledConfigType = forwardRef(
  <AsElement extends ElementType = typeof _defaultElement>(
    props: CustomProps,
    ref: ForwardedRef<ElementRef<AsElement>>,
  ) => {
    if (props?.isLoading) {
      return (
        <StyledButton
          as={_defaultElement}
          {...props}
          /** @ts-ignore */
          ref={ref}
          position="relative"
          data-is-loading
          aria-disabled
          disabled
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
          <StyledButton
            as="a"
            {...props}
            /** @ts-ignore */
            ref={ref}
          />
        </Link>
      );
    }

    return (
      <StyledButton
        as={_defaultElement}
        {...props}
        /** @ts-ignore */
        ref={ref}
      />
    );
  },
);

Button.config = {
  variant: variants,
  buttonSize: sizes,
};
