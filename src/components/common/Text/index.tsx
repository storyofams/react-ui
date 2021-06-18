import { FC } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { SystemProps, StyledConfigType } from '~lib';
import { Box } from '~components/common/Box';

const variants = {
  plg: {
    fontSize: [1.75, 2.5],
    fontWeight: 'regular',
    lineHeight: 'high',
  },
  pmd: {
    fontSize: [1.75, 2],
    fontWeight: 'regular',
    lineHeight: 'high',
  },
  psm: {
    fontSize: [1.25, 1.5],
    fontWeight: 'regular',
    lineHeight: 'high',
  },
  label: {
    display: 'flex',

    lineHeight: 'medium',
    fontWeight: 'semiBold',
    color: 'grey700',

    cursor: 'pointer',

    '&[disabled=""]': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
  },
};

type CustomProps = {
  as?: 'p' | 'span' | 'blockquote' | 'strong' | 'em' | 'pre' | 'label';
  variant?: keyof typeof variants;
} & SystemProps;

/* @ts-expect-error */
export const Text: FC<CustomProps> & StyledConfigType = styled(
  Box,
)<CustomProps>`
  ${variant({ variants })}
`;

Text.config = {
  variant: variants,
};
