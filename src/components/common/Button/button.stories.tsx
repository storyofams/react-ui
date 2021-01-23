import React from 'react';

import { Button } from '~components';

export default {
  component: Button,
  title: 'components/Button',
  args: { isLoading: false, disabled: false },
};

export const Primary = (args) => <Button {...args}>Lorem Ipsum</Button>;

Primary.args = {
  variant: 'primary',
};

export const Secondary = (args) => <Button {...args}>Lorem Ipsum</Button>;

Secondary.args = {
  variant: 'secondary',
};

export const Outline = (args) => <Button {...args}>Lorem Ipsum</Button>;

Outline.args = {
  variant: 'outline',
};

export const Underline = (args) => <Button {...args}>Lorem Ipsum</Button>;

Underline.args = {
  variant: 'underline',
};

export const Link = (args) => <Button {...args}>Lorem Ipsum</Button>;

Link.args = {
  href: '/',
  variant: 'link',
};
