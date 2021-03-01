import React, { FC } from 'react';

import { Box } from '~components/common/Box';
import { HeadingKnownProps } from '~lib/styledSystem';

export interface HeadingProps extends HeadingKnownProps {}

export const Heading: FC<HeadingProps> = (props) => <Box {...props} />;

export default Heading;
