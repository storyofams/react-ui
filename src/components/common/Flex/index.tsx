import React, { ElementType } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { SystemProps, WithPolyMorphicProps } from '~lib';
import { Box } from '~components/common/Box';

const _defaultElement = 'div';

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
  flexSize?: keyof typeof sizes;
};

const StyledFlex = styled(Box).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ['flexSize'].indexOf(prop) === -1 && defaultValidatorFn(prop),
})<CustomProps>`
  display: flex;

  ${variant({ prop: 'flexSize', variants: sizes })}
  ${variant({ variants })}
`;

export const Flex = <AsElement extends ElementType = typeof _defaultElement>(
  props: WithPolyMorphicProps<AsElement, CustomProps>,
) => (
  <>
    {/** @ts-ignore */}
    <StyledFlex {...props} />
  </>
);

Flex.config = {
  variant: variants,
  flexSize: sizes,
};
