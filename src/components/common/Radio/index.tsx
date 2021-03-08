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

// const StyledRadio = styled(RadixRadioGroup.Item)`
//   appearance: none;
//   background-color: transparent;
//   padding: 0;
//   border: none;

//   display: inline-flex;
//   vertical-align: middle;

//   &:focus {
//     outline: none;
//     box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.primary800},
//       0 0 0 1px ${({ theme }) => theme.colors.primary800};
//   }

//   ${(props) => props.css}
//   ${system}
// `;

// const StyledIndicatorBox = styled(Box)`
//   border: none;

//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   vertical-align: middle;

//   width: 20px;
//   height: 20px;

//   border-radius: 50%;
//   background-color: ${({ theme }) => theme.colors.primary50};
//   box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.primary800};
// `;

// const StyledIndicator = styled(RadixRadioGroup.Indicator)`
//   appearance: none;

//   width: 12px;
//   height: 12px;

//   border-radius: 50%;
//   background-color: ${({ theme }) => theme.colors.primary800};

//   ${(props) => props.css}
//   ${system}
// `;

const StyledRadio = styled.input``;

const Radio = ({ value, label, ...rest }) => {
  const autoId = useId();
  const id = `radio-button=${autoId}`;

  return (
    <Text as="label" htmlFor={id} key={id}>
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
