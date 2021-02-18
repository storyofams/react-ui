import React, { createElement } from 'react';
import { axe } from 'jest-axe';

import { Icon } from '~components';
import { render } from '~lib';
import 'jest-styled-components';

test('[Icon] should not fail accessibility testing', async () => {
  const { container } = render(<Icon icon={createElement('div')} />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('handles the iconAs with iconAs', async () => {
  const { getByTestId } = render(
    <Icon icon={'heart' as any} data-testid="icon" iconAs="h1" />,
  );
  const element = getByTestId('icon');
  expect(element.nodeName).toBe('H1');
});

test('handles the iconAs with href', async () => {
  const { getByTestId } = render(
    <Icon
      icon={'heart' as any}
      data-testid="icon"
      href="https://www.example.com"
    />,
  );
  const element = getByTestId('icon');
  expect(element.nodeName).toBe('A');
});

test('handles the iconAs with onClick', async () => {
  const onClick = jest.fn();
  const { getByTestId } = render(
    <Icon icon={'heart' as any} data-testid="icon" onClick={onClick} />,
  );
  const element = getByTestId('icon');
  expect(element.nodeName).toBe('BUTTON');
});

test('handles the iconAs with default', async () => {
  const { getByTestId } = render(
    <Icon icon={'heart' as any} data-testid="icon" />,
  );
  const element = getByTestId('icon');
  expect(element.nodeName).toBe('DIV');
});
