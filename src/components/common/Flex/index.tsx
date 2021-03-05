import React, { ReactElement, ElementType } from 'react';
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { system } from '~lib';
import { SystemProps } from '~types/system';

const _defaultElement = 'div';

const variants = {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

type CustomProps = {
  variant: keyof typeof variants;
} & SystemProps;

type Props<
  AsElement extends ElementType = typeof _defaultElement
> = PolymorphicPropsWithoutRef<CustomProps, AsElement>;

const Polymorph = styled.div`
  font-family: inherit;

  display: flex;

  ${variant({ variants })}
  ${(props) => props.css}
  ${system}
`;

export const Flex = <AsElement extends ElementType = typeof _defaultElement>(
  props: Props<AsElement>,
): ReactElement | null => {
  /** @todo figure out why return type is misbehaving */
  // @ts-ignore
  return <Polymorph {...props} />;
};
