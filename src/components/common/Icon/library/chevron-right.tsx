/* istanbul ignore file */
import * as React from 'react';

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 6 8" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M1.667 0l-.94.94L3.78 4 .727 7.06l.94.94 4-4-4-4z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoChevronRight = React.memo(ChevronRight);
export default MemoChevronRight;
