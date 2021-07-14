import React, { FC } from 'react';

import { pick } from '@styled-system/props';
import { useId } from 'react-id-generator';

import { SystemProps } from '~lib';
import { Box } from '~components/common/Box';
import { status, StatusMessage } from '~components/common/StatusMessage';
import { Text } from '~components/common/Text';

export interface InputWrapperProps extends SystemProps {
  statusMessage?: string;
  id?: string;
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
        <Text as="label" mb={1} htmlFor={id} variant="label">
          {label}
        </Text>
      )}

      {children}

      {(!!statusMessage || !!error) && (
        <StatusMessage mt={0.5} status={error ? 'error' : status}>
          {error || statusMessage}
        </StatusMessage>
      )}
    </Box>
  );
};
