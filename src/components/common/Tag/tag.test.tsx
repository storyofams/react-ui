import React from 'react';
import { axe } from 'jest-axe';

import { Tag } from '~components';
import { fireEvent, render, RGBToHex } from '~lib/test-utils';
import theme from '~styles/theme';

test('[Tag] should not fail accessibility testing', async () => {
  const { container } = render(<Tag checked={false} onChange={() => null} />);

  expect(await axe(container)).toHaveNoViolations();
});

test('receives change events', async () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <Tag data-testid="tag" checked={false} onChange={onChange} />,
  );
  const tag: any = getByTestId('tag');

  expect(tag.checked).toBeFalsy();

  fireEvent.click(tag, { target: { checked: true } });

  expect(tag.checked).toBeTruthy();
  expect(onChange).toBeCalled();
});

test('handles styling for unchecked', async () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <Tag data-testid="tag" checked={false} onChange={onChange} />,
  );
  const tag: any = getByTestId('tag');

  let style = window.getComputedStyle(tag);
  const colorUnchecked = RGBToHex(style.color);
  const backgroundColorUnchecked = RGBToHex(style.backgroundColor);

  expect(colorUnchecked).toBe(theme.colors.grey700.toLowerCase());
  expect(backgroundColorUnchecked).toBe(theme.colors.primary100.toLowerCase());
  expect(style.borderColor).toBe(theme.colors.primary100.toLowerCase());
});

test('handles styling for checked', async () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <Tag data-testid="tag" checked={true} onChange={onChange} />,
  );
  const tag: any = getByTestId('tag');

  const style = window.getComputedStyle(tag);
  const colorChecked = RGBToHex(style.color);
  const backgroundColorChecked = RGBToHex(style.backgroundColor);

  expect(colorChecked).toBe(theme.colors.white.toLowerCase());
  expect(backgroundColorChecked).toBe(theme.colors.primary700.toLowerCase());
  expect(style.borderColor).toBe(theme.colors.primary700.toLowerCase());
});
