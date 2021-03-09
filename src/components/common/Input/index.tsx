import React, {
  forwardRef,
  ElementType,
  ForwardedRef,
  ElementRef,
  ReactElement,
} from 'react';

import { pick, omit } from '@styled-system/props';
import { useId } from 'react-id-generator';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef,
} from 'react-polymorphic-types';
import styled from 'styled-components';

import { system } from '~lib';
import { Box } from '~components/common/Box';
import { Icon } from '~components/common/Icon';
import {
  InputWrapper,
  InputWrapperProps,
} from '~components/common/InputWrapper';
import type { SystemProps } from '~types/system';

const _defaultElement = 'input';

type CustomProps = {
  icon?: ReactElement;
} & SystemProps &
  InputWrapperProps;

type Props<
  T extends ElementType = typeof _defaultElement
> = PolymorphicPropsWithRef<CustomProps, T>;

const StyledInput = styled.input`
  appearance: none;
  display: inline-block;

  min-height: 38px;

  transition: border-color 0.18s ease-in-out, background-color 0.18s ease-in-out;

  text-decoration: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary800};
  }

  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary50};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;

    &:hover {
      border-color: ${({ theme }) => theme.colors.grey300};
    }
  }

  &:required {
    background-color: ${({ theme }) => theme.colors.error50};
    border-color: ${({ theme }) => theme.colors.error600};
    color: ${({ theme }) => theme.colors.error600};
  }

  ${(props) => props.css}
  ${system}
`;

export const Input: PolymorphicForwardRefExoticComponent<
  CustomProps,
  typeof _defaultElement
> = forwardRef(function Input<
  AsElement extends ElementType = typeof _defaultElement
>(
  props: PolymorphicPropsWithoutRef<Props, AsElement>,
  ref: ForwardedRef<ElementRef<AsElement>>,
) {
  const {
    icon,
    label,
    status,
    statusMessage,
    error,
    disabled,
    id: givenId,
  } = props;
  const autoId = useId();
  const id = givenId || `input-${autoId}`;

  return (
    <InputWrapper
      id={id}
      label={label}
      status={status}
      statusMessage={statusMessage}
      error={error}
      {...pick(props)}
    >
      <Box position="relative">
        <StyledInput
          id={id}
          ref={ref}
          pr={icon && 5}
          disabled={disabled}
          py={0.75}
          px={2}
          borderColor="grey300"
          borderRadius="xs"
          color="grey700"
          fontSize={[2, 1.75]}
          {...omit(props)}
        />
        {icon && (
          <Icon
            display="flex"
            alignItems="center"
            position="absolute"
            pointerEvents="none"
            right={1.5}
            top={0}
            bottom={0}
            opacity={disabled ? 0.6 : 1}
            color="grey800"
            icon={icon}
          />
        )}
      </Box>
    </InputWrapper>
  );
});
