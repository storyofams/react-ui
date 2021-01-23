import React, { forwardRef } from 'react';

import {
  Textarea as RebassTextarea,
  TextareaProps as RebassTextareaProps,
} from '@rebass/forms/styled-components';
import { pick, omit } from '@styled-system/props';
// import { useId } from '@storyofams/react-helpers';

import { InputWrapper, InputWrapperProps } from '~components';

export const Textarea = forwardRef<RebassTextareaProps, InputWrapperProps>(
  ({ label, status, statusMessage, error, id: givenId, ...props }, ref) => {
    const autoId = 'random-id'; /** @todo replace with useId() */
    const id = givenId || `checkbox-${autoId}`;

    return (
      <InputWrapper
        id={id}
        label={label}
        status={status}
        statusMessage={statusMessage}
        error={error}
        {...pick(props)}
      >
        <RebassTextarea id={id} ref={ref} {...omit(props)} />
      </InputWrapper>
    );
  },
);
