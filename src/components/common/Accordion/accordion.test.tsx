import React from 'react';
import { Accordion } from '~components';
import { fireEvent, render, screen } from '~lib';

jest.mock('../Icon/library/chevron-bottom.svg', () => 'div');

test('renders string content', () => {
  const title = 'accordion title';
  const content = 'accordion content';
  const { getByTestId } = render(
    <Accordion title={title} data-testid="accordion">
      {content}
    </Accordion>,
  );

  const element = getByTestId('accordion');
  const contentBox = screen.queryByText(content).parentElement;
  const textBox = screen.queryByText(content);

  expect(window.getComputedStyle(textBox).opacity).toBe('0');
  expect(window.getComputedStyle(contentBox).maxHeight).toBe('0');

  fireEvent.click(element);
  expect(window.getComputedStyle(textBox).opacity).toBe('1');
  expect(window.getComputedStyle(contentBox).maxHeight).toBe('500px');

  fireEvent.click(element);
  expect(window.getComputedStyle(textBox).opacity).toBe('0');
  expect(window.getComputedStyle(contentBox).maxHeight).toBe('0');
});

test('renders custom content', () => {
  const title = 'accordion title';
  const content = 'custom accordion content';
  const { getByTestId } = render(
    <Accordion title={title} data-testid="accordion">
      <div data-testid="accordion-custom-content">{content}</div>
    </Accordion>,
  );

  const element = getByTestId('accordion');
  const contentBox = getByTestId('accordion-custom-content').parentElement;

  expect(window.getComputedStyle(contentBox).maxHeight).toBe('0');

  fireEvent.click(element);
  expect(window.getComputedStyle(contentBox).maxHeight).toBe('500px');

  fireEvent.click(element);
  expect(window.getComputedStyle(contentBox).maxHeight).toBe('0');
});
