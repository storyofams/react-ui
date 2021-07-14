/* istanbul ignore file */
import * as React from 'react';

function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 18 20" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M6 9H4v2h2V9zm4 0H8v2h2V9zm4 0h-2v2h2V9zm2-7h-1V0h-2v2H5V0H3v2H2C.89 2 .01 2.9.01 4L0 18a2 2 0 002 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H2V7h14v11z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoCalendar = React.memo(Calendar);
export default MemoCalendar;
