import React, { FC } from 'react';
import {
  Text as RebassText,
  TextProps as RebassTextProps,
  BoxProps,
} from 'rebass/styled-components';

export interface TextProps extends BoxProps, RebassTextProps {}

export const Text: FC<TextProps> = ({ children, ...props }) => (
  <RebassText {...props}>{children}</RebassText>
);

export default Text;
