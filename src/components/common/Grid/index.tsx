import React, { ElementType, ReactNode } from 'react';
import { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import { ResponsiveValue } from 'styled-system';

import { SystemProps } from '~lib';
import { Box } from '~components/common/Box';
import { Flex } from '~components/common/Flex';
import { css } from '~lib/css';
import { modifyResponsiveValue } from '~lib/modifyResponsiveValue';

const GridDefaultElement = 'div';

export interface CustomProps extends SystemProps {
  rowSize: ResponsiveValue<number>;
  rowGap?: ResponsiveValue<number>;
  columnGap?: ResponsiveValue<number>;
  children?: ReactNode;
  role?: string;
}

type GridProps<AsElement extends ElementType = typeof GridDefaultElement> =
  PolymorphicPropsWithoutRef<CustomProps, AsElement>;

export const Grid = <
  AsElement extends ElementType = typeof GridDefaultElement,
>({
  rowSize,
  rowGap = 0,
  columnGap = 0,
  children,
  ...props
}: GridProps<AsElement>) => (
  <>
    {/* @ts-expect-error */}
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
  </>
);
