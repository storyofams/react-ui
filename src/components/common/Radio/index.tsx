import React, { Children, cloneElement, isValidElement } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';

import { system } from '~lib';
import { Stack } from '~components/common/Stack';

const StyledRadio = styled(RadixRadioGroup.Item)`
  ${(props) => props.css}
  ${system}
`;

const StyledIndicator = styled(RadixRadioGroup.Indicator)`
  appearance: 'none';

  ${(props) => props.css}
  ${system}
`;

export const RadioGroup = ({ onChange, value, children, ...rest }) => {
  const clones = Children.map(children, (child) => {
    if (!isValidElement<typeof Radio>(child)) {
      return child;
    }

    return cloneElement(child, {
      // @ts-ignore
      onChange: (e: any) => onChange(e.target.value),
      // @ts-ignore
      checked: child.props.value === value,
    });
  });

  return (
    <RadixRadioGroup.Root>
      <Stack flexDirection="column" space={1} {...rest}>
        {clones}
      </Stack>
    </RadixRadioGroup.Root>
  );
};
export const Radio = ({ onChange, value, checked, ...props }) => (
  <StyledRadio value={value} checked={checked} onChange={onChange} {...props}>
    <StyledIndicator />
  </StyledRadio>
);
