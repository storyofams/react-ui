/* istanbul ignore file */
import * as React from 'react';

function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M7.052 5.345L8 2.427l.948 2.918c.18.556.7.933 1.284.933H13.3L10.818 8.08a1.35 1.35 0 00-.49 1.51l.948 2.918-2.482-1.804a1.35 1.35 0 00-1.588 0L4.724 12.51l.948-2.918a1.35 1.35 0 00-.49-1.51L2.7 6.278h3.068a1.35 1.35 0 001.284-.933z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const MemoStar = React.memo(Star);
export default MemoStar;
