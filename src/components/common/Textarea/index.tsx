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

/** we could probably just make this variant of Input with as="textarea"  */
const StyledTextarea = styled.textarea`
  appearance: none;

  min-height: 38px;

  border-radius: ${({ theme }) => theme.radii.xs};
  border-color: ${({ theme }) => theme.colors.grey300};

  transition: border-color 0.18s ease-in-out, background-color 0.18s ease-in-out;
  resize: vertical;

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary800};
  }

  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary50};
    border-color: ${({ theme }) => theme.colors.primary800};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;

    &:hover {
      border-color: ${({ theme }) => theme.colors.grey300};
    }
  }

  &[required=''] {
    background-color: ${({ theme }) => theme.colors.error50};
    border-color: ${({ theme }) => theme.colors.error600};
    color: ${({ theme }) => theme.colors.error600};
  }

  ${(props) => props.css}
  ${system}
`;

export const Textarea: PolymorphicForwardRefExoticComponent<
  CustomProps,
  typeof _defaultElement
> = forwardRef(function Input<
  AsElement extends ElementType = typeof _defaultElement
>(
  props: PolymorphicPropsWithoutRef<Props, AsElement>,
  ref: ForwardedRef<ElementRef<AsElement>>,
) {
  const { label, status, statusMessage, error, id: givenId } = props;
  const autoId = useId();
  const id = givenId || `textarea-${autoId}`;

  return (
    <InputWrapper
      id={id}
      label={label}
      status={status}
      statusMessage={statusMessage}
      error={error}
      alignItems="flex-start"
      {...pick(props)}
    >
      <StyledTextarea
        id={id}
        ref={ref}
        py={0.75}
        px={2}
        fontSize={[2, 1.75]}
        {...omit(props)}
      />
    </InputWrapper>
  );
});
