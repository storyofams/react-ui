import React, { useState } from 'react';
import { Box } from 'rebass/styled-components';

import { DatePicker } from '~/components';

export default {
  component: DatePicker,
  title: 'components/DatePicker',
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    status: 'success',
    statusMessage: 'Status text',
    required: false,
    disabled: false,
  },
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['default', 'success', 'warning', 'error'],
      },
    },
  },
};

export const Basic = (args) => {
  const [dateTimeVal, setDateTimeVal] = useState(null);

  return (
    <Box maxWidth="300px">
      <DatePicker
        value={dateTimeVal}
        onChange={setDateTimeVal}
        inputProps={args}
      />
    </Box>
  );
};
