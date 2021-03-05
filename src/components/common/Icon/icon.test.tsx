import React, { createElement } from 'react';
import { axe } from 'jest-axe';
import 'jest-styled-components';

import { Icon } from '~components';
import { render, screen, userEvent } from '~lib/test-utils';

test('[Icon] should not fail accessibility testing', async () => {
  const { container } = render(<Icon icon={createElement('div')} />);

  expect(await axe(container)).toHaveNoViolations();
});

test('renders without crashing', async () => {
  render(<Icon icon={'heart' as any} data-testid="icon" />);

  expect(screen.getByTestId('icon')).toBeInTheDocument();
});

test('renders as `a` tag', async () => {
  render(
    <Icon
      as="a"
      icon={'heart' as any}
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
    <Icon
      icon={'heart' as any}
      as="button"
      onClick={handleClick}
      data-testid="icon"
    />,
  );

  expect(screen.getByTestId('icon')).toBeInTheDocument();
  expect(screen.getByTestId('icon').tagName.toLowerCase()).toEqual('button');

  userEvent.click(screen.getByTestId('icon'));

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders functions as elements', async () => {
  const handleClick = jest.fn();
  render(
    <Icon icon={'heart' as any} onClick={handleClick} data-testid="icon" />,
  );

  expect(screen.getByTestId('icon')).toBeInTheDocument();
});
