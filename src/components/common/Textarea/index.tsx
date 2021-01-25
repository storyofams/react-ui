import React, { forwardRef } from 'react';

import {
  Textarea as RebassTextarea,
  TextareaProps as RebassTextareaProps,
} from '@rebass/forms/styled-components';
import { pick, omit } from '@styled-system/props';
import { useUID } from 'react-uid';

import {
  InputWrapper,
  InputWrapperProps,
} from '~components/common/InputWrapper';

export const Textarea = forwardRef<RebassTextareaProps, InputWrapperProps>(
  ({ label, status, statusMessage, error, id: givenId, ...props }, ref) => {
    const autoId = useUID();
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
