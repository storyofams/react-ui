/* istanbul ignore file */
import * as React from 'react';

function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 13 18" fill="none" width="1em" height="1em" {...props}>
      <path d="M10 1L2 9l8 8" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

const MemoChevronLeft = React.memo(ChevronLeft);
export default MemoChevronLeft;
