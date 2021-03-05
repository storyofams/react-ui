import React from 'react';
import { axe } from 'jest-axe';

import { Box } from '~components';
import { render } from '~lib/test-utils';

test('[Button] should not fail accessibility testing', async () => {
  const { container } = render(<Box />);

  expect(await axe(container)).toHaveNoViolations();
});

// Isolated Polymorph playground
// const Polymorphs = () => (
//   <>
//     {/** Box as `a` does not accept the `form` prop */}
//     {/** @ts-expect-error */}
//     <Box as="a" form="form" />

//     {/** Box as `button` does not accept the `href` prop */}
//     {/** @ts-expect-error */}
//     <Box as="button" href="/" />
//   </>
// );

// test('Polymorphism', () => {
//   render(<Polymorphs />);
// });
