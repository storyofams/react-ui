import React from 'react';

import { Button } from '~components';

export default {
  component: Button,
  title: 'components/Button',
  args: { isLoading: false, disabled: false, hasIcon: false, size: 'small' },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export const Primary = (args) => (
  <Button
    as="button"
    type="button"
    {...args}
    backgroundColor="error100"
    variant={`${args.variant}.${args.size}`}
  >
    Lorem Ipsum
  </Button>
);

Primary.args = {
  variant: 'primary',
};

export const Secondary = (args) => (
  <Button {...args} variant={`${args.variant}.${args.size}`}>
    Lorem Ipsum
  </Button>
);

Secondary.args = {
  variant: 'secondary',
};
