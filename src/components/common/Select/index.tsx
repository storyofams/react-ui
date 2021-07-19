import React, { FC } from 'react';
import { pick, omit } from '@styled-system/props';
import { useId } from 'react-id-generator';
import { Props } from 'react-select';

import {
  InputWrapper,
  InputWrapperProps,
} from '~components/common/InputWrapper';

import StyledSelect from './components/StyledSelect';

type SelectProps = {
  id?: string;
} & InputWrapperProps &
  Props;

export const Select: FC<SelectProps> = ({
  status = false,
  statusMessage = false,
  label = false,
  error,
  id: givenId,
  ...rest
}) => {
  const autoId = useId();
  const id = givenId || `select-${autoId}`;

  return (
    <InputWrapper
      id={id}
      label={label}
      status={status}
      statusMessage={statusMessage}
      error={error}
      {...pick(rest)}
    >
      <StyledSelect {...omit(rest)} inputId={id} />
    </InputWrapper>
  );
};
