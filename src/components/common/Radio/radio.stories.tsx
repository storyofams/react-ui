import React from 'react';

import { RadioGroup } from '~components';

const options = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
];

export default {
  component: RadioGroup,
  title: 'components/Radio',
  args: {
    name: 'Storybook radio',
    value: '1',
    options,
  },
};

export const Basic = (args) => (
  <RadioGroup space={1} flexDirection="column" {...args} />
);
