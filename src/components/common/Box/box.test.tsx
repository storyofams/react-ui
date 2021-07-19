import React from 'react';
import { axe } from 'jest-axe';

import { Box } from '~components';
import { render } from '~lib/test-utils';

test('[Button] should not fail accessibility testing', async () => {
  const { container } = render(<Box />);

  expect(await axe(container)).toHaveNoViolations();
});
