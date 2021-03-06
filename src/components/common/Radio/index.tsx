import React, { FC, CSSProperties } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { useId } from 'react-id-generator';
import styled from 'styled-components';
import { ResponsiveValue } from 'styled-system';

import { system } from '~lib';
import { Box } from '~components/common/Box';
import { Stack } from '~components/common/Stack';
import { Text } from '~components/common/Text';

import type { SystemProps } from '~types/system';

const StyledRadio = styled(RadixRadioGroup.Item)`
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

const StyledIndicatorBox = styled(Box)`
  border: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary50};
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.primary800};
`;

const StyledIndicator = styled(RadixRadioGroup.Indicator)`
  appearance: none;

  width: 12px;
  height: 12px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary800};

  ${(props) => props.css}
  ${system}
`;

type CSS = CSSProperties;

type RadioGroupProps = {
  onChange(e: string): void;
  value: string;
  space: ResponsiveValue<CSS['margin']>;
  flexDirection?: ResponsiveValue<CSS['flexDirection']>;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  onChange,
  value,
  children,
  ...rest
}) => {
  return (
    <RadixRadioGroup.Root
      {...rest}
      as={Stack}
      value={value}
      onValueChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    >
      {children}
    </RadixRadioGroup.Root>
  );
};

type RadioProps = {
  value: string;
  id?: string;
} & SystemProps;

export const Radio: FC<RadioProps> = ({
  value,
  children,
  id: initialId = undefined,
  ...rest
}) => {
  const autoId = useId();
  const id = initialId || `radio=${autoId}`;

  return (
    <StyledRadio value={value} {...rest} id={id}>
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
        {children}
      </Text>
    </StyledRadio>
  );
};
