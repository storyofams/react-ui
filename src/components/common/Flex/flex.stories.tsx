import React from 'react';

import { Flex } from '~components';
import theme from '~styles/theme';

export default {
  component: Flex,
  title: 'components/Flex',
  argTypes: {},
};

export const Basic = (args) => <Flex {...args} />;
