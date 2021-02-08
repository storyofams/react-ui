import React, { useState } from 'react';
import { Box } from 'rebass/styled-components';

import { DatePicker } from '~/components';

export default {
  component: DatePicker,
  title: 'components/DatePicker',
};

export const Basic = () => {
  const [dateTimeVal, setDateTimeVal] = useState(null);

  return (
    <Box maxWidth="300px">
      <DatePicker
        value={dateTimeVal}
        onChange={setDateTimeVal}
        inputProps={{
          placeholder: 'this is a date field',
        }}
      />
    </Box>
  );
};
