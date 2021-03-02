import React, { forwardRef, FC } from 'react';

import styled from 'styled-components';
import { Box } from '~components/common/Box';
import { Link } from '~components/common/Link';
import { Spinner } from '~components/common/Spinner';
import { PolymorphicComponentProps, BoxKnownProps } from '~lib/styledSystem';

export interface CustomButtonProps extends BoxKnownProps {
  isLoading?: boolean;
  disabled?: boolean;
  href?: string;
  to?: string;
}

export const StyledButton = <AsElementType extends React.ElementType>(
  props: PolymorphicComponentProps<AsElementType, CustomButtonProps>,
) => <Box {...props} />;

export const Button: FC<CustomButtonProps> = forwardRef(
  ({ isLoading, disabled, children, href, to, ...props }, ref) => {
    const _props = {
      ...props,
      disabled: disabled || isLoading,
      ref,
    };

    if (isLoading) {
      return (
        <StyledButton
          as="button"
          onClick={console.log}
          data-is-loading
          {..._props}
        >
          <Box
            as="div"
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          >
            <Spinner size={16} />
          </Box>
          <Box as="div" display="flex" color="transparent">
            {children}
          </Box>
        </StyledButton>
      );
    }

    if (href) {
      return (
        <Link
          href={href}
          sx={{
            '&:hover': { opacity: 1 },
            '&::before': { bg: 'transparent' },
          }}
        >
          <StyledButton as="button" {..._props}>
            {children}
          </StyledButton>
        </Link>
      );
    }

    if (to) {
      return (
        <Link
          to={to}
          sx={{
            '&:hover': { opacity: 1 },
            '&::before': { bg: 'transparent' },
          }}
        >
          <StyledButton as="button" {..._props}>
            {children}
          </StyledButton>
        </Link>
      );
    }

    return (
      <StyledButton as="button" {..._props}>
        {children}
      </StyledButton>
    );
  },
);
