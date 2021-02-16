import React, { FC } from 'react';

import { Label } from '@rebass/forms/styled-components';
import { pick } from '@styled-system/props';
import { useId } from 'react-id-generator';
import { Box, BoxProps } from 'rebass/styled-components';

import { status, StatusMessage } from '~components/common/StatusMessage';

export interface InputWrapperProps extends BoxProps {
  statusMessage?: string;
  /** please add a label for accesibility purposes */
  label?: string;
  status?: status;
  error?: string;
}

export const InputWrapper: FC<InputWrapperProps & { id?: string }> = ({
  label,
  status,
  statusMessage,
  error,
  id: givenId,
  children,
  ...props
}) => {
  const autoId = useId();
  const id = givenId || `input-${autoId}`;

  return (
    <Box {...pick(props)}>
      {label && (
        <Label mb={1} htmlFor={id}>
          {label}
        </Label>
      )}

      {children}

      {(!!statusMessage || !!error) && (
        <StatusMessage mt="1/2" status={error ? 'error' : status}>
          {error || statusMessage}
        </StatusMessage>
      )}
    </Box>
  );
};
