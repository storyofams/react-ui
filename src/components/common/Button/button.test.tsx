import React, { useEffect, useRef } from 'react';
import { axe } from 'jest-axe';

import { Button } from '~components';
import { fireEvent, render, screen } from '~test-utils';

test('[Button] should not fail accessibility testing', async () => {
  const { container } = render(<Button>Click</Button>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('registers event handlers', () => {
  const clickHandler = jest.fn();
  const { getByText } = render(<Button onClick={clickHandler}>button</Button>);

  fireEvent.click(getByText('button'));

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

const Component = ({ refHandler }) => {
  const ref = useRef<HTMLButtonElement>();
  useEffect(() => {
    if (ref.current) {
      ref.current.click();
    }
  });

  return (
    <Button ref={ref} onClick={refHandler}>
      button
    </Button>
  );
};

test('forwards ref', () => {
  const refHandler = jest.fn();
  render(<Component refHandler={refHandler} />);

  expect(refHandler).toHaveBeenCalledTimes(1);
});

test('handles `isLoading` prop', () => {
  render(<Button data-testid="loading-btn" isLoading />);

  expect(screen.getByRole('button')).toHaveAttribute('data-is-loading', 'true');
});

test('handles `href` prop', () => {
  render(
    <Button as="a" href="/">
      button
    </Button>,
  );

  expect(screen.getByRole('link', { name: /button/i })).toHaveAttribute(
    'href',
    '/',
  );
});

test('handles `to` props', async () => {
  render(
    <Button as="a" to="/next-link">
      button
    </Button>,
  );

  expect(screen.getByText(/button/i)).toHaveAttribute('href', '/next-link');
});
