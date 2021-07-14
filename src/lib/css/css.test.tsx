import React from 'react';
import { DefaultTheme } from 'styled-components';

import { Box, Button } from '~components';
import { css } from '~lib';

import { screen, render } from '~lib/test-utils';

const theme = {
  colors: {
    primary500: '#0EA5E9',
  },
} as DefaultTheme;

describe('CSS function', () => {
  it('should return an object of styles', () => {
    const result = css({
      backgroundColor: 'primary500',
      color: 'red',
    })({ theme });

    expect(result).toEqual({
      backgroundColor: theme.colors.primary500,
      color: 'red',
    });
  });

  it('should return an object of styles', () => {
    const result = css({
      backgroundColor: 'primary500',
      color: 'red',
    })(theme);

    expect(result).toEqual({
      backgroundColor: theme.colors.primary500,
      color: 'red',
    });
  });

  it('should render styles for the box primitive', () => {
    render(
      <Box css={css({ backgroundColor: 'primary500' })} data-testid="box" />,
    );

    expect(screen.getByTestId('box')).toHaveStyle({
      backgroundColor: theme.colors.primary500,
    });
  });

  it('should render styles for an extended primitive', () => {
    render(
      <Button css={css({ backgroundColor: 'primary500' })} data-testid="box" />,
    );

    expect(screen.getByTestId('box')).toHaveStyle({
      backgroundColor: theme.colors.primary500,
    });
  });
});
