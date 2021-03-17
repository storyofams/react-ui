import React, { forwardRef } from 'react';
import { CustomCheckbox, CustomCheckboxProps } from '@reach/checkbox';
import { pick, omit } from '@styled-system/props';
import { useId } from 'react-id-generator';
import styled from 'styled-components';
import { Box } from '~components/common/Box';
import {
  InputWrapper,
  InputWrapperProps,
} from '~components/common/InputWrapper';
import { Text } from '~components/common/Text';

type ToggleProps = {
  id?: string;
  disabled?: boolean;
  label?: string;
} & InputWrapperProps;

const ToggleContainer = styled(Box)<ToggleProps>`
  position: relative;
  display: block;
  width: 40px;
  height: 24px;

  [data-reach-custom-checkbox] input {
    appearance: none;
  }

  > .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary300};
    border: 1px;
    border-color: ${({ theme }) => theme.colors.primary300};
    transition: background-color 0.18s ease-in-out,
      border-color 0.18s ease-in-out, box-shadow 0.18s ease-in-out;
    border-radius: 24px;
  }

  > .slider:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: left 0.18s ease-in-out, right 0.18s ease-in-out;
    border-radius: 99999px;
  }

  [data-reach-custom-checkbox][data-state='checked'] {
    & + .slider {
      background-color: ${({ theme }) => theme.colors.primary800};
      border-color: ${({ theme }) => theme.colors.primary800};
    }

    & + .slider:before {
      left: unset;
      right: 4px;
    }
  }

  &:not([disabled]):hover,
  &:not([disabled]):focus,
  &:not([disabled]):focus-within {
    > .slider {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary200};
    }
  }

  &[disabled] > .slider {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Toggle = forwardRef<CustomCheckboxProps, ToggleProps>(
  (
    {
      status = false,
      statusMessage = false,
      error,
      id: givenId,
      disabled,
      label,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const id = givenId || `toggle-${autoId}`;

    return (
      <InputWrapper
        status={status}
        statusMessage={statusMessage}
        error={error}
        {...pick(rest)}
      >
        {label && (
          <Text mb={1} variant="label" id={`label-${id}`}>
            {label}
          </Text>
        )}
        <ToggleContainer
          as="label"
          htmlFor={id}
          disabled={disabled}
          {...pick(rest)}
        >
          <CustomCheckbox
            disabled={disabled}
            id={id}
            ref={ref}
            aria-labelledby={`label-${id}`}
            {...omit(rest)}
          />
          <span className="slider" />
        </ToggleContainer>
      </InputWrapper>
    );
  },
);
