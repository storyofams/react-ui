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

  position: relative;

  display: inline-flex;
  vertical-align: middle;

  width: 20px;
  height: 20px;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.primary800},
      0 0 0 1px ${({ theme }) => theme.colors.primary800};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &[data-reach-custom-checkbox] {
    input {
      position: relative;
      width: 100%;
      appearance: none;
      outline: none;
      background: ${({ theme }) => theme.colors.primary50};
      border-radius: ${({ theme }) => theme.radii.sm};
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.primary800},
        0 0 0 1px ${({ theme }) => theme.colors.primary800};
    }
  }

  &[data-reach-custom-checkbox][data-state='checked'] {
    input {
      background: ${({ theme }) => theme.colors.primary800};
    }

    input:before {
      content: '✔';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: block;
      color: ${({ theme }) => theme.colors.white};
    }
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
        <Text as="label" htmlFor={id} fontSize={2} variant="label">
          <StyledCheckbox {...omit(rest)} id={id} ref={ref} mr={0.5} />
          {label}
        </Text>
      </InputWrapper>
    );
  },
);
