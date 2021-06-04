import React from 'react';

import { Button } from '~components';
import { styled } from '~lib';

export default {
  component: Button,
  title: 'components/Button',
};

const CustomButton = styled(Button, {
  variants: {
    custom: {
      myOwnThing: {
        fontSize: 21,

        '&:hover': {
          backgroundColor: 'primary100',
        },
      },
    },
    variant: {
      custom: {
        fontSize: 14,
      },
    },
  },
});

export const test = () => (
  <>
    <CustomButton>button</CustomButton>
    <CustomButton backgroundColor="primary200" variant="custom">
      button
    </CustomButton>
    <CustomButton backgroundColor="primary200" variant="primary">
      button
    </CustomButton>
    <CustomButton variant="custom">button</CustomButton>
  </>
);

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
