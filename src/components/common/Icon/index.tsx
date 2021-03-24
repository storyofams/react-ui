import React, {
  createElement,
  forwardRef,
  ElementType,
  ForwardedRef,
  ElementRef,
  isValidElement,
  ReactNode,
  ReactSVGElement,
  ReactElement,
} from 'react';
import type { PolymorphicForwardRefExoticComponent } from 'react-polymorphic-types';
import styled from 'styled-components';

import { SystemProps } from '~lib';
import { Box } from '~components/common/Box';

const _defaultElement = 'div';

type CustomProps = {
  icon: ReactElement | ReactNode;
  className?: string;
} & SystemProps;

const StyledIcon = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  svg: {
    vertical-align: middle;
  }
`;

export const Icon: PolymorphicForwardRefExoticComponent<
  CustomProps,
  typeof _defaultElement
> = forwardRef(
  <AsElement extends ElementType = typeof _defaultElement>(
    { icon, ...rest }: any,
    ref: ForwardedRef<ElementRef<AsElement>>,
  ) => {
    return (
      <StyledIcon {...rest} ref={ref}>
        {/* @ts-ignore */}
        {isValidElement<ReactSVGElement>(icon) ? icon : createElement(icon)}
      </StyledIcon>
    );
  },
);
