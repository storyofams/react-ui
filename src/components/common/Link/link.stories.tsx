import React from 'react';
import { Link } from '~components';

export default {
  component: Link,
  title: 'components/Link',
  args: {
    href: '/',
  },
};

export const Basic = (args) => <Link {...args}>Lorem Ipsum</Link>;

Basic.args = {
  href: '/',
};

export const Underline = (args) => <Link {...args}>Lorem Ipsum</Link>;

Underline.args = {
  href: '/',
  variant: 'link.underline',
};
