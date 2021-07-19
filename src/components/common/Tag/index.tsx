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

const TagComponent = styled(Box)`
  display: flex;

  [data-reach-custom-checkbox] input {
    appearance: none;
  }

  .tag {
    width: max-content;

    padding: ${({ theme }) => theme.space[1]}px
      ${({ theme }) => theme.space[1.5]}px;

    cursor: pointer;

    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.primary100};
    border-radius: ${({ theme }) => theme.radii.full};

    font-size: ${({ theme }) => theme.fontSizes[1.5]}px;
    line-height: ${({ theme }) => theme.lineHeights.normal};
    color: ${({ theme }) => theme.colors.primary700};

    background-color: ${({ theme }) => theme.colors.primary100};

    transition: border-color 0.18s ease-in-out,
      background-color 0.18s ease-in-out, box-shadow 0.18s ease-in-out;
  }

  [data-reach-custom-checkbox][data-state='checked'] + .tag {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary700};
    border-color: ${({ theme }) => theme.colors.primary700};
  }

  &:not([disabled]):hover {
    .tag {
      border-color: ${({ theme }) => theme.colors.primary700};
    }
  }

  &:not([disabled]):focus,
  &:not([disabled]):focus-within {
    .tag {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary200};
    }
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

type TagProps = {
  id?: string;
  disabled?: boolean;
  label: string;
} & InputWrapperProps;

export const Tag = forwardRef<CustomCheckboxProps, TagProps>(
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
    const id = givenId || `tag-${autoId}`;

    return (
      <InputWrapper
        status={status}
        statusMessage={statusMessage}
        error={error}
        {...pick(rest)}
      >
        <TagComponent
          as="label"
          htmlFor={id}
          disabled={disabled}
          {...pick(rest)}
        >
          <CustomCheckbox
            disabled={disabled}
            id={id}
            ref={ref}
            {...omit(rest)}
          />
          <span className="tag">{label}</span>
        </TagComponent>
      </InputWrapper>
    );
  },
);

export default Tag;
