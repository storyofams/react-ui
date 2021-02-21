import React, { forwardRef, FC } from 'react';

import {
  Box,
  Button as RebassButton,
  ButtonProps as RebassButtonProps,
} from 'rebass/styled-components';

import { Link } from '~components/common/Link';
import { Spinner } from '~components/common/Spinner';

export interface ButtonProps extends RebassButtonProps {
  isLoading?: boolean;
  href?: string;
  to?: string;
}

export const Button: FC<ButtonProps> = forwardRef(
  ({ isLoading, children, disabled, href, to, ...props }, ref) => {
    const _props = {
      ...props,
      disabled: disabled || isLoading,
      ref,
    };

    if (isLoading) {
      return (
        <RebassButton variant="" data-is-loading {..._props}>
          <Box
            backgroundColor="error100"
            color="warning800"
            mx={'mobileGutter'}
            sx={{
              // backgroundColor: (theme) => theme.colors.secondary100,
              backgroundColor: 'primar',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Spinner size={16} />
          </Box>
          <Box display="flex" color="transparent">
            {children}
          </Box>
        </RebassButton>
      );
    }

    if (href) {
      return (
        <Link
          href={href}
          sx={{
            color: 'whitesmoke',
            '&:hover': { opacity: 1 },
            '&::before': { bg: 'transparent' },
          }}
        >
          <RebassButton {..._props}>{children}</RebassButton>
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
          <RebassButton {..._props}>{children}</RebassButton>
        </Link>
      );
    }

    return <RebassButton {..._props}>{children}</RebassButton>;
  },
);
