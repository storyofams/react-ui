import styled, { StyledComponent, DefaultTheme } from 'styled-components';
import { variant } from 'styled-system';

import { SystemProps, StyledConfigType } from '~lib';
import { Box } from '~components/common/Box';

const variants = {
  h1: {
    fontSize: 20,
    fontWeight: 'semiBold',
    lineHeight: 'heading',
  },
  h2: {
    fontSize: [7, 10],
    fontWeight: 'semiBold',
    lineHeight: 'heading',
  },
  h3: {
    fontSize: [4, 6],
    fontWeight: 'semiBold',
    lineHeight: 'heading',
  },
  h4: {
    fontSize: [3, 4],
    fontWeight: 'semiBold',
    lineHeight: 'heading',
  },
  h5: {
    fontSize: [2.5, 3],
    fontWeight: 'semiBold',
    lineHeight: 'heading',
  },
};

type CustomProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: keyof typeof variants;
} & SystemProps;

/* @ts-expect-error */
export const Heading: StyledComponent<'div', DefaultTheme, CustomProps> &
  StyledConfigType = styled(Box)<CustomProps>`
  ${variant({ variants })}
`;

Heading.config = {
  variant: variants,
};
