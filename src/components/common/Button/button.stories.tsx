import React from 'react';

import { Button } from '~components';
import { styled } from '~lib';

export default {
  component: Button,
  title: 'components/Button',
};

const ExtendedButton = styled(Button, {
  variants: {
    newVariant: {
      primary: {
        fontSize: 21,

        '&:hover': {
          backgroundColor: 'primary100',
        },
      },
    },
    buttonSize: {
      'medium-screen-xl': {
        fontSize: 2.2,
        lineHeight: 'medium',
      },
    },
    variant: {
      customPrimary: {
        fontSize: 14,
      },
    },
  },
});

export const Extended = () => (
  <>
    <ExtendedButton variant="primary">button</ExtendedButton>
    <ExtendedButton variant="customPrimary" newVariant="primary">
      button
    </ExtendedButton>
    <ExtendedButton
      variant="customPrimary"
      buttonSize={['large', 'medium', 'medium-screen-xl']}
    >
      button
    </ExtendedButton>
  </>
);

export const Primary = (args) => <Button {...args}>Lorem Ipsum</Button>;

Primary.args = {
  variant: 'primary',
  size: 'small',
};

export const Secondary = (args) => (
  <Button buttonSize={['large', 'medium', 'small']} {...args}>
    Lorem Ipsum
  </Button>
);

Secondary.args = {
  variant: 'secondary',
  size: 'small',
};

export const Link = (args) => (
  <Button buttonSize={['large', 'medium', 'small']} {...args}>
    Lorem Ipsum
  </Button>
);

Link.args = {
  variant: 'link',
  size: 'small',
};

export const Underline = (args) => (
  <Button as="a" buttonSize={['large', 'medium', 'small']} {...args}>
    Lorem Ipsum
  </Button>
);

Underline.args = {
  variant: 'underline',
  size: 'small',
};
