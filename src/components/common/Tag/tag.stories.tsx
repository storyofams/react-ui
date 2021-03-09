import React, { useState } from 'react';

import { Stack, Tag } from '~components';

export default {
  component: Tag,
  title: 'components/Tag',
  args: {
    children: 'text',
  },
};

export const Basic = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <Stack space={0} maxWidth="400px" flexDirection="column">
      <Tag checked={checked} onChange={() => setChecked(!checked)}>
        Tag Label
      </Tag>
    </Stack>
  );
};
