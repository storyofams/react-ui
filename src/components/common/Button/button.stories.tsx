import React from 'react';

import { Button, Icon } from '~components';
import { Heart } from '~components/common/Icon/library';

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
  <Button {...args} variant={`${args.variant}.${args.size}`}>
    {args.hasIcon && <Icon icon={<Heart />} sx={{ mr: 1 }} />}
    Lorem Ipsum
  </Button>
);

Primary.args = {
  variant: 'primary',
};

export const Secondary = (args) => (
  <Button {...args} variant={`${args.variant}.${args.size}`}>
    {args.hasIcon && <Icon icon={<Heart />} sx={{ mr: 1 }} />}
    Lorem Ipsum
  </Button>
);

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
