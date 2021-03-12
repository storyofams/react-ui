import React from 'react';

import { Button } from '~components';

export default {
  component: Button,
  title: 'components/Button',
};

export const Primary = (args) => <Button {...args}>Lorem Ipsum</Button>;

Primary.args = {
  variant: 'primary',
  size: 'small',
};

export const Secondary = (args) => (
  <Button sizes={['large', 'medium', 'small']} {...args}>
    Lorem Ipsum
  </Button>
);

Secondary.args = {
  variant: 'secondary',
  size: 'small',
};
