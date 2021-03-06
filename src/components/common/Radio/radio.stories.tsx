import React, { useState } from 'react';

import { Radio, RadioGroup } from '~components';

export default {
  component: Radio,
  title: 'components/Radio',
  args: {
    children: 'one',
    value: '1',
  },
};

export const Basic = (args) => {
  const [val, setVal] = useState<string>();

  return (
    <RadioGroup space={1} flexDirection="column" value={val} onChange={setVal}>
      <Radio value="1">one</Radio>
      <Radio value="2">two</Radio>
      <Radio value="3">three</Radio>
    </RadioGroup>
  );
};
