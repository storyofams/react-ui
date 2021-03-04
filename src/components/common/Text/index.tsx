import React, { FC } from 'react';

import { Box } from '~components/common/Box';

export interface TextProps {}

export const Text: FC<TextProps> = (props) => <Box as="p" {...props} />;
