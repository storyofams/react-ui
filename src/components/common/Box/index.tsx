import styled from 'styled-components';

import { system, BoxKnownProps } from '~lib/styledSystem';

export const Box = styled.div<BoxKnownProps>`
  font-family: inherit;
  ${system}
`;
