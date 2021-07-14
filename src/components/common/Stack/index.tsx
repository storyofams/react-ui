import React, { FC, CSSProperties } from 'react';
import { ResponsiveValue } from 'styled-system';

import { SystemProps } from '~lib';
import { Box } from '~components/common/Box';
import { css } from '~lib/css';
import { modifyResponsiveValue } from '~lib/modifyResponsiveValue';

type CSS = CSSProperties;

type CustomProps = SystemProps & {
  space: ResponsiveValue<CSS['margin']>;
  role?: string;
  flexDirection?: ResponsiveValue<CSS['flexDirection']>;
};

export const Stack: FC<CustomProps> = ({
  space,
  flexDirection,
  role,
  ...rest
}) => {
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
    <Box
      {...rest}
      display="flex"
      flexDirection={commonDirectionProp}
      role={role}
      css={css({
        '&& > * + *': spacingProp,
      })}
    />
  );
};
