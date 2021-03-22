import React from 'react';

import { Button } from '~components';

export default {
  component: Button,
  title: 'components/Button',
};

export const Primary = (args) => (
  <Button {...args} disabled>
    Lorem Ipsum
  </Button>
);

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

export const Link = (args) => (
  <Button sizes={['large', 'medium', 'small']} {...args}>
    Lorem Ipsum
  </Button>
);

Link.args = {
  variant: 'link',
  size: 'small',
};

export const Underline = (args) => (
  <Button as="a" sizes={['large', 'medium', 'small']} {...args}>
    Lorem Ipsum
  </Button>
);

Underline.args = {
  variant: 'underline',
  size: 'small',
};
