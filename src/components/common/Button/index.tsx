import React, {
  forwardRef,
  ForwardedRef,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
import Link from 'next/link';
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

type ButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type AnchorType = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type CustomProps = {
  isLoading?: boolean;
  to?: string | undefined;
  variant?: keyof typeof variants;
  buttonSize?: keyof typeof sizes;
  disabled?: boolean;
  children: ReactNode;
} & SystemProps;

type ButtonProps =
  | ({ as?: never } & ButtonType & CustomProps)
  | ({ as: 'a' } & AnchorType & CustomProps);

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

export const Button = forwardRef(
  ({ to, isLoading, ...props }: ButtonProps, ref: ForwardedRef<any>) => {
    if (isLoading) {
      return (
        // @ts-expect-error
        <StyledButton
          as={_defaultElement}
          {...props}
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

    if (to) {
      return (
        <Link href={to} passHref>
          {/* @ts-expect-error */}
          <StyledButton as="a" {...props} ref={ref} />
        </Link>
      );
    }

    // @ts-expect-error
    return <StyledButton as={_defaultElement} {...props} ref={ref} />;
  },
);

(Button as StyledConfigType).config = {
  variant: variants,
  buttonSize: sizes,
};
