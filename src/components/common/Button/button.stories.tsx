import React from 'react';

import { Button } from '~components';

export default {
  component: Button,
  title: 'components/Button',
};

export const Primary = (args) => <Button {...args}>Lorem Ipsum</Button>;

Primary.args = {
  variant: 'primary',
};

export const Secondary = (args) => <Button {...args}>Lorem Ipsum</Button>;

Secondary.args = {
  variant: 'secondary',
};
