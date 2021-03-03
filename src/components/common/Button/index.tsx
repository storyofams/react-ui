import React, { forwardRef, PropsWithChildren } from 'react';

import { css } from '~lib';

import { Box } from '~components/common/Box';
import { BaseProps } from '~types/custom-system';

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

const defaultElement = 'button';

const StyledButton = (props: PropsWithChildren<ButtonOwnProps>) => (
  <Box
    appearance="none"
    display="inline-block"
    textAlign="center"
    textDecoration="none"
    px={3}
    py={2}
    border={0}
    borderRadius="xs"
    css={css({
      color: 'primary100',
      backgroundColor: 'primary100',
      mx: 1,

      '&:hover': {
        opacity: 0.25,
      },
    })}
    {...props}
  />
);

export const Button: <
  AsElementType extends React.ElementType = typeof defaultElement
>(
  props: ButtonProps<AsElementType>,
) => React.ReactElement | null = forwardRef(
  ({ as, ...rest }: ButtonOwnProps, ref: React.Ref<Element>) => {
    const Element = as || defaultElement;

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

    return <StyledButton {...rest} as={Element} ref={ref} />;
  },
);
