import React from 'react';

import { Flex } from '~components';
import { styled } from '~lib';

export default {
  component: Flex,
  title: 'components/Flex',
  argTypes: {},
};

const ExtendedFlex = styled(Flex, {
  variants: {
    variant: {
      center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
});

export const Basic = (args) => <Flex {...args} />;
export const Extended = (args) => (
  <ExtendedFlex {...args} as="a" href="/link" />
);
