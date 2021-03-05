import React from 'react';
import { axe } from 'jest-axe';

import { StatusMessage } from '~components';
import { render, RGBToHex } from '~lib/test-utils';
import theme from '~styles/theme';

test('[StatusMessage] should not fail accessibility testing', async () => {
  const { container } = render(<StatusMessage status="success" />);

  expect(await axe(container)).toHaveNoViolations();
});

test('receives change events', async () => {
  const { getByTestId } = render(
    <StatusMessage data-testid="test" status="default">
      Test
    </StatusMessage>,
  );
  const element = getByTestId('test');
  const style = window.getComputedStyle(element);
  const themeColor = theme.colors.grey900.toLowerCase();
  const elementColor = RGBToHex(style.color);

  expect(elementColor).toBe(themeColor);
});
test('handles status success', async () => {
  const { getByTestId } = render(
    <StatusMessage data-testid="test" status="success">
      Test
    </StatusMessage>,
  );
  const element = getByTestId('test');
  const style = window.getComputedStyle(element);
  const themeColor = theme.colors.success600.toLowerCase();
  const elementColor = RGBToHex(style.color);

  expect(elementColor).toBe(themeColor);
});
test('handles status warning', async () => {
  const { getByTestId } = render(
    <StatusMessage data-testid="test" status="warning">
      Test
    </StatusMessage>,
  );
  const element = getByTestId('test');
  const style = window.getComputedStyle(element);
  const themeColor = theme.colors.warning600.toLowerCase();
  const elementColor = RGBToHex(style.color);

  expect(elementColor).toBe(themeColor);
});
test('handles status error', async () => {
  const { getByTestId } = render(
    <StatusMessage data-testid="test" status="error">
      Test
    </StatusMessage>,
  );
  const element = getByTestId('test');
  const style = window.getComputedStyle(element);
  const themeColor = theme.colors.error600.toLowerCase();
  const elementColor = RGBToHex(style.color);

  expect(elementColor).toBe(themeColor);
});
