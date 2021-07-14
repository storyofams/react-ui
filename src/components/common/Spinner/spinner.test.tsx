import React from 'react';
import { axe } from 'jest-axe';

import { Spinner } from '~components';
import { render, screen } from '~lib/test-utils';

test('[Spinner] should not fail accessibility testing', async () => {
  const { container } = render(<Spinner />);

  expect(await axe(container)).toHaveNoViolations();
});

test('it renders without crashing', () => {
  render(<Spinner data-testid="spinner" />);

  expect(screen.getByTestId('spinner')).toBeInTheDocument();
});

test('handles props', async () => {
  render(<Spinner data-testid="spinner" color="transparent" size={80} />);
  const element = screen.getByTestId('spinner');
  const spinnerContainer: any = element.firstChild;

  expect(window.getComputedStyle(element).color).toBe('rgba(255, 255, 255, 0)');
  expect(spinnerContainer).toHaveAttribute('size', '80');
});
