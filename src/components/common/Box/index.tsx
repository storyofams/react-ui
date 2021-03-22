import styled from 'styled-components';
import { shouldForwardProp } from 'system-props';
import { system, SystemProps, shouldForwardExtraProp } from '~lib/system-props';

export interface BoxProps extends SystemProps {}

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

type CustomBoxProps = SystemProps & {
  myOwnProp: boolean;
};

export const CustomBox = styled(Box)<CustomBoxProps>``;
