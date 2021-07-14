import React from 'react';
import { Button } from '~components';
import { styled } from '~lib/styled';
import { render } from '~lib/test-utils';

const CustomButton = styled(Button, {
  variants: {
    custom: {
      myOwnThing: {
        fontSize: 21,
      },
    },
    variant: {
      custom: {
        fontSize: 14,
      },
    },
  },
});

test('component with extended variants', () => {
  render(
    <>
      <CustomButton backgroundColor="primary200" custom="myOwnThing">
        button
      </CustomButton>
      <CustomButton backgroundColor="primary200" variant="custom">
        button
      </CustomButton>
      <CustomButton variant="primary">button</CustomButton>
    </>,
  );
});
