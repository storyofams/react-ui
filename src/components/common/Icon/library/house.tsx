/* istanbul ignore file */
import * as React from 'react';

function House(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 14 12" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M5.667 11.333v-4h2.666v4h3.334V6h2L7 0 .333 6h2v5.333h3.334z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoHouse = React.memo(House);
export default MemoHouse;
