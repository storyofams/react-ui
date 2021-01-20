import React, { forwardRef } from 'react';

import {
  Checkbox as RebassCheckbox,
  Label,
  CheckboxProps as RebassCheckboxProps,
} from '@rebass/forms/styled-components';
import { pick, omit } from '@styled-system/props';
// import { useId } from '@storyofams/react-helpers';

import { InputWrapper, InputWrapperProps } from '~components';

interface CheckboxProps extends RebassCheckboxProps, InputWrapperProps {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, status, statusMessage, error, id: givenId, ...props }, ref) => {
    const autoId = 'random-id'; /** @todo replace with useId() */
    const id = givenId || `checkbox-${autoId}`;

    return (
      <InputWrapper
        status={status}
        statusMessage={statusMessage}
        error={error}
        {...pick(props)}
      >
        <Label htmlFor={id}>
          <RebassCheckbox id={id} ref={ref} {...omit(props)} />
          {label}
        </Label>
      </InputWrapper>
    );
  },
);

export default Checkbox;
