/* istanbul ignore file */
import * as React from 'react';

function Help(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <circle
        cx={8}
        cy={8}
        r={7}
        fill="transparent"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        d="M7.95 4a4.959 4.959 0 00-2.466.651l.568 1.14a4.004 4.004 0 011.781-.51c.246-.014.49.047.7.177a.59.59 0 01.25.516.922.922 0 01-.174.546 3.26 3.26 0 01-.722.636 2.8 2.8 0 00-.78.786c-.148.266-.221.567-.214.87V9.2h1.38v-.315a.88.88 0 01.134-.505c.184-.216.397-.405.633-.562.384-.25.72-.567.989-.938.179-.298.27-.642.26-.99a1.685 1.685 0 00-.633-1.375A2.62 2.62 0 007.95 4zM7.667 12a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoHelp = React.memo(Help);
export default MemoHelp;
