import React, { forwardRef } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { pick, omit } from '@styled-system/props';
import { useId } from 'react-id-generator';
import { Props } from 'react-select';
import styled from 'styled-components';

import { system } from '~lib';
import { Box } from '~components/common/Box';
import {
  InputWrapper,
  InputWrapperProps,
} from '~components/common/InputWrapper';
import { Text } from '~components/common/Text';

const StyledCheckbox = styled(RadixCheckbox.Root)`
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
`;

const StyledIndicatorBox = styled(Box)`
  border: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  width: 20px;
  height: 20px;

  border-radius: ${({ theme }) => theme.radii.xs};
  background-color: ${({ theme }) => theme.colors.primary50};
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.primary800};
`;

const StyledIndicator = styled(RadixCheckbox.Indicator)`
  appearance: none;

  width: 12px;
  height: 12px;

  border-radius: ${({ theme }) => theme.radii.xs};
  background-color: ${({ theme }) => theme.colors.primary800};

  ${(props) => props.css}
  ${system}
`;

export const Checkbox = forwardRef<Props, InputWrapperProps & { id?: string }>(
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
    const id = givenId || `checkbox-${autoId}`;

    return (
      <InputWrapper
        status={status}
        statusMessage={statusMessage}
        error={error}
        {...pick(props)}
      >
        <StyledCheckbox ref={ref} {...omit(props)} id={id}>
          <StyledIndicatorBox>
            <StyledIndicator />
          </StyledIndicatorBox>
          <Text
            as="span"
            fontSize={2}
            lineHeight="medium"
            fontWeight="semiBold"
            color="grey700"
            ml={1}
          >
            {label}
          </Text>
        </StyledCheckbox>
      </InputWrapper>
    );
  },
);
