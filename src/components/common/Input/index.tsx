import React, { FC, forwardRef, ReactElement } from 'react';

import {
  Input as RebassInput,
  InputProps as RebassInputProps,
} from '@rebass/forms/styled-components';
import { pick, omit } from '@styled-system/props';
import { useId } from 'react-id-generator';

import { Box } from 'rebass/styled-components';
import {
  InputWrapper,
  InputWrapperProps,
} from '~components/common/InputWrapper';
import { Icon } from '../Icon';

export interface InputProps extends RebassInputProps, InputWrapperProps {
  icon?: ReactElement;
}

export const Input: FC<InputProps> = forwardRef(
  (
    {
      icon,
      label,
      status,
      statusMessage,
      error,
      disabled,
      id: givenId,
      ...props
    },
    ref,
  ) => {
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
        <Box sx={{ position: 'relative' }}>
          <RebassInput
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
              sx={{
                position: 'absolute',
                pointerEvents: 'none',
                right: 1.5,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                opacity: disabled ? 0.6 : 1,
              }}
            />
          )}
        </Box>
      </InputWrapper>
    );
  },
);
