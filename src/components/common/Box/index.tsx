import styled from 'styled-components';

import { system, BaseProps } from '~lib/styledSystem';
import { Box as PolyBox } from '../PolyBox/index';

export const Box = styled(PolyBox)<BaseProps>`
  font-family: inherit;
  ${system}
`;
