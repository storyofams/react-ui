import React, { ReactNode } from 'react';
import { ResponsiveValue } from 'styled-system';

import { SystemProps } from '~lib';
import { Box } from '~components/common/Box';
import { Flex } from '~components/common/Flex';
import { css } from '~lib/css';
import { modifyResponsiveValue } from '~lib/modifyResponsiveValue';

export interface CustomProps extends SystemProps {
  rowSize: ResponsiveValue<number>;
  rowGap?: ResponsiveValue<number>;
  columnGap?: ResponsiveValue<number>;
  children?: ReactNode;
}

export const Grid = ({
  rowSize,
  rowGap = 0,
  columnGap = 0,
  children,
  ...props
}: CustomProps) => (
  <Box {...props}>
    <Flex
      flexWrap="wrap"
      ml={modifyResponsiveValue(columnGap, (val) => -val)}
      mt={modifyResponsiveValue(rowGap, (val) => -val)}
      css={css({
        '& > *': {
          flex: modifyResponsiveValue(
            rowSize,
            (size) => `0 1 ${(1 / size) * 100}%`,
          ),
          pl: columnGap,
          pt: rowGap,
        },
      })}
    >
      {children}
    </Flex>
  </Box>
);
