import React, { CSSProperties } from 'react';
import { pick, omit } from '@styled-system/props';
import { useId } from 'react-id-generator';
import styled from 'styled-components';
import { ResponsiveValue } from 'styled-system';

import {
  InputWrapper,
  InputWrapperProps,
} from '~components/common/InputWrapper';
import { Stack } from '~components/common/Stack';
import { Text } from '~components/common/Text';

const StyledRadio = styled.input`
  appearance: none;
  outline: none;
  border: none;

  position: relative;

  width: 20px;
  height: 20px;

  margin-right: ${({ theme }) => theme.space[1]}px;

  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary800};
  background: ${({ theme }) => theme.colors.primary50};
  transition: border-shadow 0.18s ease-in-out,
    background-color 0.18s ease-in-out, 0.18s box-shadow ease-in-out;

  &:checked {
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: ${({ theme }) => theme.colors.primary800};
      width: 12px;
      height: 12px;
      border-radius: 50%;

      transition: background-color 0.18s ease-in-out;
    }
  }

  &:not([disabled]):hover,
  &:not([disabled]):focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary200};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const Radio = ({ value, label, disabled, ...rest }) => {
  const autoId = useId();
  const id = `radio-button=${autoId}`;

  return (
    <Text
      as="label"
      variant="label"
      fontSize={2}
      htmlFor={id}
      key={id}
      display="flex"
      alignItems="center"
      opacity={disabled ? 0.6 : 1}
      cursor={disabled ? 'not-allowed' : 'pointer'}
    >
      <StyledRadio
        id={id}
        value={value}
        type="radio"
        disabled={disabled}
        {...rest}
      />
      {label}
    </Text>
  );
};

type CSS = CSSProperties;

type RadioGroupProps = {
  id?: string;
  name: string;
  options: { label?: string; value: string | number }[];
  space: ResponsiveValue<CSS['margin']>;
  flexDirection?: ResponsiveValue<CSS['flexDirection']>;
  disabled?: boolean;
} & InputWrapperProps;

export const RadioGroup = ({
  error,
  options,
  space,
  flexDirection,
  id: initialId,
  label,
  status = undefined,
  statusMessage = undefined,
  disabled = false,
  ...rest
}: RadioGroupProps) => {
  const autoId = useId();
  const id = initialId || `radio-group-${autoId}`;

  return (
    <InputWrapper
      status={status}
      statusMessage={statusMessage}
      error={error}
      label={label}
      id={id}
      {...pick(rest)}
    >
      <Stack space={space} flexDirection={flexDirection} role="radiogroup">
        {options.map((option, i) => (
          <Radio
            value={option.value}
            label={option?.label ?? option?.value}
            key={i}
            disabled={disabled}
            {...omit(rest)}
          />
        ))}
      </Stack>
    </InputWrapper>
  );
};
