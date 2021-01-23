import React, { FC, forwardRef, ReactElement } from 'react';
import { Box, BoxProps } from 'rebass/styled-components';

const styles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  svg: { verticalAlign: 'middle' },
};

export interface IconProps extends BoxProps {
  icon: ReactElement;
  iconAs?: string;
  href?: string;
  className?: string;
}

export const Icon: FC<IconProps> = forwardRef(
  ({ icon, iconAs, ...props }, ref) => {
    function getAs(): any {
      switch (true) {
        case iconAs !== undefined:
          return iconAs;
        case props.href !== undefined:
          return 'a';
        case props.onClick !== undefined:
          return 'button';
        default:
          return 'div';
      }
    }

    return (
      <Box ref={ref} aria-hidden as={getAs()} sx={styles} {...props}>
        {icon}
      </Box>
    );
  },
);
