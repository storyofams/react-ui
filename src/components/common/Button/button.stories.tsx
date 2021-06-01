import React from 'react';

import { Button } from '~components';
import { styled } from '~lib/styled';

export default {
  component: Button,
  title: 'components/Button',
};

const CustomButton = styled(Button, {
  baseStyles: {
    fontSize: 12,

    '&:hover': {
      fontSize: 14,
    },
  },

  variants: {
    /** `variant` is the name for the default variants */
    variant: {
      // we can override default keys as well
      primary: {
        // spread the original variant (if desired)
        ...(Button as any).config.variant.primary,
        backgroundColor: 'black',
      },
      custom: {
        backgroundColor: 'blue',
      },
    },
  },
});

export const Custom = (args) => (
  <CustomButton variant="primary" buttonSize="large">
    Lorem Ipsum
  </CustomButton>
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
