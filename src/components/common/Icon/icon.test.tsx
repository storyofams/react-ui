import React from 'react';
import { axe } from 'jest-axe';
import 'jest-styled-components';

import { Icon } from '~components';
import { Heart } from '~components/common/Icon/library';
import { render, screen, userEvent } from '~lib/test-utils';

test('[Icon] should not fail accessibility testing', async () => {
  const { container } = render(<Icon icon={Heart} />);

  expect(await axe(container)).toHaveNoViolations();
});

test('renders without crashing', async () => {
  render(<Icon icon={Heart} data-testid="icon" />);

  expect(screen.getByTestId('icon')).toBeInTheDocument();
});

test('renders as `a` tag', async () => {
  render(
    <Icon
      as="a"
      icon={Heart}
      data-testid="icon"
      href="https://www.example.com"
    />,
  );

  expect(screen.getByTestId('icon')).toBeInTheDocument();
  expect(screen.getByTestId('icon').tagName.toLowerCase()).toEqual('a');
});

test('renders as `button` tag', async () => {
  const handleClick = jest.fn();
  render(
    <Icon icon={Heart} as="button" onClick={handleClick} data-testid="icon" />,
  );

  expect(screen.getByTestId('icon')).toBeInTheDocument();
  expect(screen.getByTestId('icon').tagName.toLowerCase()).toEqual('button');

  userEvent.click(screen.getByTestId('icon'));

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders functions as elements', async () => {
  const handleClick = jest.fn();
  render(<Icon icon={Heart} onClick={handleClick} data-testid="icon" />);

  expect(screen.getByTestId('icon')).toBeInTheDocument();
});
