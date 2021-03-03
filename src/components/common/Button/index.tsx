import React, { forwardRef, PropsWithChildren } from 'react';
import css from '@styled-system/css';

import { Box } from '~components/common/Box';
import { Spinner } from '~components/common/Spinner';
import { BaseProps } from '~lib/styledSystem';
// import { Link } from '~components/common/Link';

export type ButtonOwnProps<
  AsElementType extends React.ElementType = React.ElementType
> = {
  isLoading?: boolean;
  to?: string;
  /** add more custom button properties here */
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
      color: 'primary500',
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
          <Spinner />
        </StyledButton>
      );
    }

    return <StyledButton {...rest} as={Element} ref={ref} />;
  },
);
