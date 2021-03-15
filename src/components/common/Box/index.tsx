import styled from 'styled-components';

import { system, allPropNames } from '~lib';
import { SystemProps } from '~types/system';

// Component-specific props should be specified here
type Props = {} & SystemProps;

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    allPropNames.indexOf(prop) === -1 && defaultValidatorFn(prop),
})<Props>`
  font-family: inherit;

  ${(props) => props.css}
  ${system}
`;
