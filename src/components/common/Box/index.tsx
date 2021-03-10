import React, {
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react';
import type {
  PolymorphicPropsWithoutRef,
  PolymorphicForwardRefExoticComponent,
} from 'react-polymorphic-types';
import styled from 'styled-components';

import { system } from '~lib';
import { SystemProps } from '~types/system';

const _defaultElement = 'div';

type CustomProps = {} & SystemProps;

type Props<
  AsElement extends ElementType = typeof _defaultElement
> = PolymorphicPropsWithoutRef<CustomProps, AsElement>;

const Polymorph = styled.div`
  font-family: inherit;

  ${(props) => props.css}
  ${system}
`;

export const Box: PolymorphicForwardRefExoticComponent<
  CustomProps,
  typeof _defaultElement
> = forwardRef(function Box<
  AsElement extends ElementType = typeof _defaultElement
>(
  props: PolymorphicPropsWithoutRef<Props, AsElement>,
  ref: ForwardedRef<ElementRef<AsElement>>,
) {
  // @ts-ignore
  return <Polymorph {...props} ref={ref} />;
});
