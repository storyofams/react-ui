import * as React from 'react';

function ZoomOut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M4.133 6.467H8.8M6.467 11.8a5.333 5.333 0 100-10.667 5.333 5.333 0 000 10.666zM10.4 10.398l4.4 4.4"
        stroke="currentColor"
        strokeMiterlimit={10}
      />
    </svg>
  );
}

const MemoZoomOut = React.memo(ZoomOut);
export default MemoZoomOut;
