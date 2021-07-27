import React, { ElementType, CSSProperties } from 'react';
import { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import { ResponsiveValue } from 'styled-system';

import { SystemProps } from '~lib';
import { Box } from '~components/common/Box';
import { css } from '~lib/css';
import { modifyResponsiveValue } from '~lib/modifyResponsiveValue';

const StackDefaultElement = 'div';

type CSS = CSSProperties;

type CustomProps = SystemProps & {
  space: ResponsiveValue<CSS['margin']>;
  role?: string;
  flexDirection?: ResponsiveValue<CSS['flexDirection']>;
};

type StackProps<AsElement extends ElementType = typeof StackDefaultElement> =
  PolymorphicPropsWithoutRef<CustomProps, AsElement>;

export const Stack = <
  AsElement extends ElementType = typeof StackDefaultElement,
>({
  space,
  flexDirection,
  role,
  ...rest
}: StackProps<AsElement>) => {
  const commonDirectionProp = flexDirection || 'row';

  function parseDirection(direction) {
    const isRow = direction.startsWith('row');
    const isReversed = direction.endsWith('reverse');

    return isRow
      ? { [isReversed ? 'mr' : 'ml']: space, mb: 0, mt: 0 }
      : { [isReversed ? 'mb' : 'mt']: space, ml: 0, mr: 0 };
  }

  const spacingProp = modifyResponsiveValue(
    commonDirectionProp,
    parseDirection,
  );

  return (
    <>
      {/* @ts-expect-error */}
      <Box
        {...rest}
        display="flex"
        flexDirection={commonDirectionProp}
        role={role}
        css={css({
          '&& > * + *': spacingProp,
        })}
      />
    </>
  );
};
