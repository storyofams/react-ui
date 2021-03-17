import React from 'react';
import Alert from '@reach/alert';

import { Box } from '~components/common/Box';
import { SystemProps } from '~types/system';

export type status = 'default' | 'success' | 'warning' | 'error';

export interface StatusMessageProps extends SystemProps {
  status: status | Boolean;
  type?: 'polite' | 'assertive';
  children: string;
}
// this component alerts screen readers when its rendered.
// should be used together with a formfield + react-hook-form

export const StatusMessage = ({
  status,
  type,
  children,
  ...props
}: StatusMessageProps) => {
  return (
    <Box
      color={
        (status !== 'default' && status ? `${status}600` : `grey900`) as any
      }
      fontSize={1.75}
      fontWeight="medium"
      mt={0.25}
      {...props}
    >
      <Alert type={type}>{children}</Alert>
    </Box>
  );
};
