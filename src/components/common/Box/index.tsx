import React, { ReactElement, ElementType } from 'react';
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
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

export const Box = <AsElement extends ElementType = typeof _defaultElement>(
  props: Props<AsElement>,
): ReactElement | null => {
  /** @todo figure out why return type is misbehaving */
  // @ts-ignore
  return <Polymorph {...props} />;
};
