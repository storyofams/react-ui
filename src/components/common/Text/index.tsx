import React, { FC } from 'react';

import { Box } from '~components/common/Box';
import { TextKnownProps } from '~lib/styledSystem';

export interface TextProps extends TextKnownProps {}

export const Text: FC<TextProps> = (props) => <Box as="p" {...props} />;
