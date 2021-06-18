import { FC } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { SystemProps, StyledConfigType } from '~lib';
import { Box } from '~components/common/Box';

const variants = {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const sizes = {
  fullWidth: {
    flex: 1,
  },
};

type CustomProps = SystemProps & {
  variant?: keyof typeof variants;
  sizes?: keyof typeof sizes;
};

/** @ts-expect-error */
export const Flex: FC<CustomProps> & StyledConfigType = styled(Box).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ['flexSize'].indexOf(prop) === -1 && defaultValidatorFn(prop),
})<CustomProps>`
  display: flex;

  ${variant({ prop: 'flexSize', variants: sizes })}
  ${variant({ variants })}
`;

Flex.config = {
  variant: variants,
  sizes: sizes,
};
