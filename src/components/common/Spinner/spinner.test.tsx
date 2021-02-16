import React from 'react';
import { axe } from 'jest-axe';

import { Spinner } from '~components';
import { render } from '~lib/test-utils';

test('[Spinner] should not fail accessibility testing', async () => {
  const { container } = render(<Spinner />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('handles props', async () => {
  const { getByTestId } = render(<Spinner data-testid="spinner" />);
  const element = await getByTestId('spinner');
  const spinnerContainer: Record<string, any> = element.firstChild;

  const hasColorAttribute = spinnerContainer.attributes.getNamedItem('color');
  expect(hasColorAttribute).toBeTruthy();
  expect(hasColorAttribute.value).toBe('');

  const hasSizeAttribute = spinnerContainer.attributes.getNamedItem('size');
  expect(hasSizeAttribute).toBeTruthy();
  expect(hasSizeAttribute.value).toBe('80');
});

test('handles theme color', async () => {
  const color = 'white';
  const { getByTestId } = render(
    <Spinner data-testid="spinner" color={color} />,
  );
  const element = await getByTestId('spinner');
  const spinnerContainer: Record<string, any> = element.firstChild;

  const hasColorAttribute = spinnerContainer.attributes.getNamedItem('color');
  expect(hasColorAttribute).toBeTruthy();
  expect(hasColorAttribute.value).toBe(color);
});
