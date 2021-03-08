import * as React from 'react';

function ChevronBottom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 8" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M1.41.59L6 5.17 10.59.59 12 2 6 8 0 2 1.41.59z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoChevronBottom = React.memo(ChevronBottom);
export default MemoChevronBottom;
