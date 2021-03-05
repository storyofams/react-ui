import React, { ReactElement, ElementType } from 'react';
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { system } from '~lib';
import { SystemProps } from '~types/system';

const _defaultElement = 'p';

const variants = {
  plg: {
    fontSize: [1.75, 2.5],
    fontWeight: 'regular',
    lineHeight: 'high',
  },
  pmd: {
    fontSize: [1.75, 2],
    fontWeight: 'regular',
    lineHeight: 'high',
  },
  psm: {
    fontSize: [1.25, 1.5],
    fontWeight: 'regular',
    lineHeight: 'high',
  },
};

type CustomProps = {
  as?: 'p' | 'span' | 'blockquote' | 'strong' | 'em' | 'pre' | 'label';
  variant?: keyof typeof variants;
} & SystemProps;

type Props<
  AsElement extends ElementType = typeof _defaultElement
> = PolymorphicPropsWithoutRef<CustomProps, AsElement>;

const Polymorph = styled.p`
  ${variant({ variants })}
  ${(props) => props.css}
  ${system}
`;

export const Text = <AsElement extends ElementType = typeof _defaultElement>(
  props: Props<AsElement>,
): ReactElement | null => {
  /** @todo figure out why return type is misbehaving */
  // @ts-ignore
  return <Polymorph {...props} />;
};
