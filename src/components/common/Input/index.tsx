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

import { css, system } from '~lib';
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

  text-decoration: none;

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
          {...omit(props)}
        />
        {icon && (
          <Icon
            color="grey800"
            icon={icon}
            css={css({
              position: 'absolute',
              pointerEvents: 'none',
              right: 1.5,
              top: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              opacity: disabled ? 0.6 : 1,
            })}
          />
        )}
      </Box>
    </InputWrapper>
  );
});
