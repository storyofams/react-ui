import React, { forwardRef } from 'react';
import { CustomCheckbox, CustomCheckboxProps } from '@reach/checkbox';
import { pick, omit } from '@styled-system/props';
import { useId } from 'react-id-generator';
import styled from 'styled-components';

import { system } from '~lib';
import {
  InputWrapper,
  InputWrapperProps,
} from '~components/common/InputWrapper';
import { Text } from '~components/common/Text';

const StyledCheckbox = styled(CustomCheckbox)`
  appearance: none;
  background-color: transparent;
  padding: 0;
  border: none;

  display: inline-flex;
  vertical-align: middle;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.primary800},
      0 0 0 1px ${({ theme }) => theme.colors.primary800};
  }

  ${(props) => props.css}
  ${system}
`;

type CheckboxProps = {
  id?: string;
} & InputWrapperProps;

export const Checkbox = forwardRef<CustomCheckboxProps, CheckboxProps>(
  (
    {
      label,
      status = false,
      statusMessage = false,
      error,
      id: givenId,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const id = givenId || `checkbox-${autoId}`;

    return (
      <InputWrapper
        status={status}
        statusMessage={statusMessage}
        error={error}
        {...pick(rest)}
      >
        <Text
          as="label"
          htmlFor={id}
          fontSize={2}
          lineHeight="medium"
          fontWeight="semiBold"
          color="grey700"
        >
          <StyledCheckbox {...omit(rest)} id={id} ref={ref} mr={1} />
          {label}
        </Text>
      </InputWrapper>
    );
  },
);
