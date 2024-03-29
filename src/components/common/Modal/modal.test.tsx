import React, { createElement, useState } from 'react';

import { axe } from 'jest-axe';

import { Modal } from '~components/common/Modal';
import { userEvent, fireEvent, render, screen } from '~lib/test-utils';

jest.mock('../Icon/library/close.svg', () => 'div');

export const Basic = ({ isInitiallyOpen = false, ...args }) => {
  const [isOpen, setIsOpen] = useState(!!isInitiallyOpen);

  return (
    <>
      <button
        aria-label="Toggle modal"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Toggle modal
      </button>

      <Modal
        header="My header"
        {...args}
        close={() => setIsOpen(false)}
        isOpen={isOpen}
        footer={
          <>
            <button onClick={close}>Cancel button</button>
            <button onClick={close}>Ok button</button>
          </>
        }
      >
        Modal content
      </Modal>
    </>
  );
};

test('[Modal] should not fail accessibility testing', async () => {
  const { container } = render(<Basic isInitiallyOpen={true} />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('should be able to toggle modal', () => {
  render(<Basic />);

  const toggleButton = screen.getByRole('button', { name: /toggle modal/i });

  expect(screen.queryByText(/modal-content/i)).toBeNull();

  userEvent.click(toggleButton);
  expect(screen.queryByText(/modal-content/i)).toBeDefined();

  userEvent.click(toggleButton);
  expect(screen.queryByText(/modal-content/i)).toBeNull();
});

test('should close when clicking close button', () => {
  render(<Basic isInitiallyOpen={true} />);

  expect(screen.queryByText(/modal-content/i)).toBeDefined();
  const closeButton = screen.getByRole('button', { name: /close modal/i });

  userEvent.click(closeButton);
  expect(screen.queryByText(/modal-content/i)).toBeNull();
});

test('should close when pressing esc', () => {
  render(<Basic isInitiallyOpen={true} />);

  expect(screen.queryByText(/modal-content/i)).toBeDefined();

  fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
  expect(screen.queryByText(/modal-content/i)).toBeNull();
});

test('should render header with custom header', () => {
  render(
    <Basic
      isOpen={true}
      header={createElement('div', { children: 'custom-header' })}
    />,
  );

  expect(screen.queryByText(/custom-header/i)).toBeDefined();
});
