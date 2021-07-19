import React, { forwardRef } from 'react';
import { CustomCheckbox, CustomCheckboxProps } from '@reach/checkbox';
import { pick, omit } from '@styled-system/props';
import { useId } from 'react-id-generator';
import styled from 'styled-components';

import { system, SystemProps } from '~lib';
import {
  InputWrapper,
  InputWrapperProps,
} from '~components/common/InputWrapper';
import { Text } from '~components/common/Text';

const StyledCheckbox = styled(CustomCheckbox)<
  CustomCheckboxProps & SystemProps
>`
  appearance: none;
  background-color: transparent;
  padding: 0;
  border: none;

  position: relative;

  display: inline-flex;
  vertical-align: middle;

  width: 20px;
  min-width: 20px;
  height: 20px;

  &[data-reach-custom-checkbox] {
    input {
      position: relative;
      width: 100%;
      appearance: none;
      outline: none;
      background: ${({ theme }) => theme.colors.primary50};
      border-radius: ${({ theme }) => theme.radii.xs};
      border: 2px solid ${({ theme }) => theme.colors.primary800};
      transition: 0.18s box-shadow ease-in-out;

      &:before {
        content: '';

        position: absolute;
        top: 1px;
        left: 5px;
        width: 6px;
        height: 12px;

        display: none;

        border-right: 2px solid;
        border-bottom: 2px solid;
        border-color: ${(p) => p.theme.colors.white};

        transform: rotate(40deg);

        transition: border-color 0.15s;
      }

      &:not([disabled]):hover,
      &:not([disabled]):focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary200};
      }
    }
  }

  &[data-reach-custom-checkbox][data-state='checked'] {
    input {
      background: ${({ theme }) => theme.colors.primary800};

      &:before {
        display: block;
      }
    }
  }

  ${(props) => props.css}
  ${system}
`;

type CheckboxProps = {
  id?: string;
  disabled?: boolean;
} & InputWrapperProps;

export const Checkbox = forwardRef<CustomCheckboxProps, CheckboxProps>(
  (
    {
      label,
      status = false,
      statusMessage = false,
      error,
      id: givenId,
      disabled,
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
          variant="label"
          opacity={disabled ? 0.6 : 1}
          cursor={disabled ? 'not-allowed' : 'pointer'}
        >
          <StyledCheckbox
            id={id}
            ref={ref}
            mr={1}
            disabled={disabled}
            {...omit(rest)}
          />
          {label}
        </Text>
      </InputWrapper>
    );
  },
);
