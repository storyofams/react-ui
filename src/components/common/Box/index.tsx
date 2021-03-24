import styled from 'styled-components';
import { shouldForwardProp } from 'system-props';
import { system, shouldForwardExtraProp, SystemProps } from '~lib/system';

type BoxProps = SystemProps & {};

export const Box = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    shouldForwardProp(prop) &&
    defaultValidatorFn(prop) &&
    shouldForwardExtraProp(prop),
})<BoxProps>`
  box-sizing: border-box;

  ${(props) => props.css}
  ${system}
`;

export const CustomBox = (props: BoxProps) => <Box {...props} />;
