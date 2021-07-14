import React, {
  forwardRef,
  ElementType,
  ForwardedRef,
  ElementRef,
  ReactElement,
} from 'react';

import { pick, omit } from '@styled-system/props';
import { useId } from 'react-id-generator';
import type { PolymorphicForwardRefExoticComponent } from 'react-polymorphic-types';
import styled from 'styled-components';

import type { SystemProps } from '~lib';
import { Box } from '~components/common/Box';
import { Icon } from '~components/common/Icon';
import {
  InputWrapper,
  InputWrapperProps,
} from '~components/common/InputWrapper';

const _defaultElement = 'input';

type CustomProps = {
  icon?: ReactElement;
  id?: string;
} & SystemProps &
  InputWrapperProps;

const StyledInput = styled(Box)`
  appearance: none;
  display: inline-block;

  min-height: 38px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.grey300};

  transition: border-color 0.18s ease-in-out, background-color 0.18s ease-in-out;

  text-decoration: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }

  &:hover,
  &:active,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary800};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;

    &:hover {
      border-color: ${({ theme }) => theme.colors.grey300};
    }
  }

  /* &[required=''] {
    background-color: ${({ theme }) => theme.colors.error50};
    border-color: ${({ theme }) => theme.colors.error600};
    color: ${({ theme }) => theme.colors.error600};
  } */
`;

export const Input: PolymorphicForwardRefExoticComponent<
  CustomProps,
  typeof _defaultElement
> = forwardRef(
  <AsElement extends ElementType = typeof _defaultElement>(
    props: any,
    ref: ForwardedRef<ElementRef<AsElement>>,
  ) => {
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
            borderRadius="xs"
            color="grey700"
            fontSize={[2, 1.75]}
            as={_defaultElement}
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
  },
);
