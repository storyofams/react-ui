/* istanbul ignore file */
import * as React from 'react';

function Play(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M3.5 14.11V1.89L13.538 8 3.5 14.11z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
}

const MemoPlay = React.memo(Play);
export default MemoPlay;
