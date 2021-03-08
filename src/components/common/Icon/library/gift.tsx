import * as React from 'react';

function Gift(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M13.333 8v6.667H2.667V8M14.667 4.666H1.333v3.333h13.334V4.666zM8 14.666v-10"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4.667H5a1.667 1.667 0 010-3.333c2.333 0 3 3.333 3 3.333zM8 4.667h3a1.667 1.667 0 100-3.333c-2.333 0-3 3.333-3 3.333z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoGift = React.memo(Gift);
export default MemoGift;
