import * as React from 'react';

function ChevronTop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 8" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M1.41 7.41L6 2.83l4.59 4.58L12 6 6 0 0 6l1.41 1.41z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoChevronTop = React.memo(ChevronTop);
export default MemoChevronTop;
