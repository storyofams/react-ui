import React from 'react';
import { axe } from 'jest-axe';

import { Accordion } from '~components';
import { userEvent, render, screen } from '~lib/test-utils';

jest.mock('../Icon/library/chevron-bottom.svg', () => 'div');

const title = 'accordion title';
const content = 'accordion content';

test('[Accordion] should not fail accessibility testing', async () => {
  const { container } = render(<Accordion title="title">content</Accordion>);

  expect(await axe(container)).toHaveNoViolations();
});

test('renders string content', () => {
  render(
    <Accordion title={title} data-testid="accordion">
      {content}
    </Accordion>,
  );

  const element = screen.getByTestId('accordion');
  const contentBox = screen.getByText(content).parentElement;
  const contentBoxParent = contentBox.parentElement;

  expect(window.getComputedStyle(contentBox).opacity).toBe('0');
  expect(window.getComputedStyle(contentBoxParent).maxHeight).toBe('0');

  userEvent.click(element);
  expect(window.getComputedStyle(contentBox).opacity).toBe('1');
  expect(window.getComputedStyle(contentBoxParent).maxHeight).toBe('500px');

  userEvent.click(element);
  expect(window.getComputedStyle(contentBox).opacity).toBe('0');
  expect(window.getComputedStyle(contentBoxParent).maxHeight).toBe('0');
});

test('renders custom content', () => {
  render(
    <Accordion title={title} data-testid="accordion">
      <div data-testid="accordion-custom-content">{content}</div>
    </Accordion>,
  );

  const element = screen.getByTestId('accordion');
  const contentBox = screen.getByTestId('accordion-custom-content')
    .parentElement.parentElement;

  expect(window.getComputedStyle(contentBox).maxHeight).toBe('0');

  userEvent.click(element);
  expect(window.getComputedStyle(contentBox).maxHeight).toBe('500px');

  userEvent.click(element);
  expect(window.getComputedStyle(contentBox).maxHeight).toBe('0');
});
