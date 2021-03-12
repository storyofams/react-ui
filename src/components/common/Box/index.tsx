import styled from 'styled-components';

import { system, allPropNames } from '~lib';
import { SystemProps } from '~types/system';

const _defaultElement = 'div';

// Component-specific props should be specified here
type Props = {} & SystemProps;

export const Box = styled(_defaultElement).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    allPropNames.indexOf(prop) === -1 && defaultValidatorFn(prop),
})<Props>`
  font-family: inherit;

  ${(props) => props.css}
  ${system}
`;
