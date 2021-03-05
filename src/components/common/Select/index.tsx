import React, { forwardRef } from 'react';
import { pick, omit } from '@styled-system/props';
import { useId } from 'react-id-generator';
import { Props } from 'react-select';

import {
  InputWrapper,
  InputWrapperProps,
} from '~components/common/InputWrapper';

import StyledSelect from './components/StyledSelect';

export const Select = forwardRef<Props, InputWrapperProps & { id?: string }>(
  (
    {
      status = false,
      statusMessage = false,
      label = false,
      error,
      id: givenId,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const id = givenId || `select-${autoId}`;

    return (
      <InputWrapper
        id={id}
        label={label}
        status={status}
        statusMessage={statusMessage}
        error={error}
        {...pick(props)}
      >
        <StyledSelect inputId={id} ref={ref} {...omit(props)} />
      </InputWrapper>
    );
  },
);
