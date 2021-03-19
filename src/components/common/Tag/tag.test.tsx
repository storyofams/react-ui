import React from 'react';
import { axe } from 'jest-axe';
import { resetId } from 'react-id-generator';

import { Tag } from '~components';
import { screen, render } from '~lib/test-utils';

test('[Tag] should not fail accessibility testing', async () => {
  const { container } = render(<Tag label="label" />);

  expect(await axe(container)).toHaveNoViolations();
});

test('handles the id prop when an id has been provided', async () => {
  const id = 'testid';

  render(<Tag label="label" id={id} />);

  expect(screen.getByRole('checkbox')).toHaveAttribute('id', id);
});

test('handles the id prop when no id has been provided', async () => {
  resetId();

  render(<Tag label="label" />);

  expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'tag-id1');
});
