import React, { FC, CSSProperties } from 'react';
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
  margin-right: ${({ theme }) => theme.space['0.5']}px;

  color: ${({ theme }) => theme.colors.primary800};

  &input:checked + & {
    display: 'block';
  }

  &input:disabled ~ & {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const Radio = ({ value, label, ...rest }) => {
  const autoId = useId();
  const id = `radio-button=${autoId}`;

  return (
    <Text as="label" variant="label" htmlFor={id} key={id}>
      <StyledRadio id={id} value={value} type="radio" {...rest} />
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
} & InputWrapperProps;

export const RadioGroup: FC<RadioGroupProps> = ({
  error,
  options,
  space,
  flexDirection,
  id: initialId,
  label,
  status = undefined,
  statusMessage = undefined,
  ...rest
}) => {
  const autoId = useId();
  const id = initialId || `radio-group=${autoId}`;

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
            {...omit(rest)}
          />
        ))}
      </Stack>
    </InputWrapper>
  );
};
