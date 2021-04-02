import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { SystemProps } from '~lib';
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
  variant?: ResponsiveValue<keyof typeof variants>;
  sizes?: ResponsiveValue<keyof typeof sizes>;
};

export const Flex = styled(Box).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ['flexSize'].indexOf(prop) === -1 && defaultValidatorFn(prop),
})<CustomProps>`
  display: flex;

  ${variant({ prop: 'flexSize', variants: sizes })}
  ${variant({ variants })}
`;
