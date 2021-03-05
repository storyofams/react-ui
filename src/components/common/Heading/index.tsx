import React, { ReactElement, ElementType } from 'react';
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { system } from '~lib';
import { SystemProps } from '~types/system';

const _defaultElement = 'h1';

const variants = {
  h1: {
    fontSize: 20,
    fontWeight: 'semiBold',
    lineHeight: 'heading',
  },
  h2: {
    fontSize: [7, 10],
    fontWeight: 'semiBold',
    lineHeight: 'heading',
  },
  h3: {
    fontSize: [4, 6],
    fontWeight: 'semiBold',
    lineHeight: 'heading',
  },
  h4: {
    fontSize: [3, 4],
    fontWeight: 'semiBold',
    lineHeight: 'heading',
  },
  h5: {
    fontSize: [2.5, 3],
    fontWeight: 'semiBold',
    lineHeight: 'heading',
  },
};

type CustomProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  variant?: keyof typeof variants;
} & SystemProps;

type Props<
  AsElement extends ElementType = typeof _defaultElement
> = PolymorphicPropsWithoutRef<CustomProps, AsElement>;

const Polymorph = styled.h1`
  ${variant({ variants })}
  ${(props) => props.css}
  ${system}
`;

export const Heading = <AsElement extends ElementType = typeof _defaultElement>(
  props: Props<AsElement>,
): ReactElement | null => {
  /** @todo figure out why return type is misbehaving */
  // @ts-ignore
  return <Polymorph {...props} />;
};
