import React, { ReactElement, ElementType } from 'react';
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import styled from 'styled-components';

import { system } from '~lib';
import { SystemProps } from '~types/system';

const _defaultElement = 'p';

type CustomProps = {
  as?:
    | 'p'
    | 'span'
    | 'blockquote'
    | 'strong'
    | 'em'
    | 'pre'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5';
} & SystemProps;

type Props<
  AsElement extends ElementType = typeof _defaultElement
> = PolymorphicPropsWithoutRef<CustomProps, AsElement>;

const Polymorph = styled.p`
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
