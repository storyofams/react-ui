import React, { FC } from 'react';
import {
  Text as RebassText,
  TextProps as RebassTextProps,
} from 'rebass/styled-components';

export interface TextProps extends RebassTextProps {}

export const Text: FC<TextProps> = ({ children, ...props }) => (
  <RebassText {...props}>{children}</RebassText>
);

export default Text;
