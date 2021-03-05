import React, { FC } from 'react';

import { Box } from '~components/common/Box';

import { SystemProps } from '~types/system';

const variants = {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

type CustomProps = {
  variant: keyof typeof variants;
} & SystemProps;

export const Flex: FC<CustomProps> = ({ ...rest }) => {
  return <Box {...rest} display="flex" />;
};
