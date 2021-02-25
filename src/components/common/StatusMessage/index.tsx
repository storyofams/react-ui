import React, { FC } from 'react';
import Alert from '@reach/alert';
import { Text, TextProps } from 'rebass/styled-components';

export type status = 'default' | 'success' | 'warning' | 'error';

export interface StatusMessageProps extends TextProps {
  status: 'default' | 'success' | 'warning' | 'error';
  type?: 'polite' | 'assertive';
}
// this component alerts screen readers when its rendered.
// should be used together with a formfield + react-hook-form

export const StatusMessage: FC<StatusMessageProps> = ({
  status = 'default',
  type,
  children,
  ...props
}) => {
  return (
    <Text
      color={
        status === 'default'
          ? `grey900`
          : (`${status}600` as 'success600' | 'warning600' | 'error600')
      }
      fontSize={1.75}
      fontWeight="medium"
      mt={0.25}
      {...props}
    >
      <Alert type={type}>{children}</Alert>
    </Text>
  );
};
