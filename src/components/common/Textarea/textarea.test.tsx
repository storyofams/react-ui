import React from 'react';
import { axe } from 'jest-axe';
import { resetId } from 'react-id-generator';

import { Textarea } from '~components/common/Textarea';
import { render, screen } from '~lib/test-utils';

const label = 'label';

test('[Textarea] should not fail accessibility testing', async () => {
  const { container } = render(<Textarea label="textarea" />);

  expect(await axe(container)).toHaveNoViolations();
});

test('handles the id prop when an id has been provided', async () => {
  const id = 'testid';

  render(<Textarea id={id} data-testid="test" label={label} />);

  expect(screen.getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  const id = 'textarea-id1';
  resetId();

  render(<Textarea data-testid="test" label={label} />);

  expect(screen.getByLabelText(label).id).toBe(id);
});
