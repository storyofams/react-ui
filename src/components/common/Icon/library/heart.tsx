/* istanbul ignore file */
import * as React from 'react';

function Heart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M13.906 3.005c-1.458-1.339-3.822-1.339-5.28 0-.261.24-.458.513-.626.796a3.41 3.41 0 00-.627-.797c-1.458-1.339-3.822-1.339-5.28 0-1.457 1.339-1.457 3.51 0 4.849L8 14l5.906-6.147c1.459-1.339 1.459-3.51 0-4.848z"
        stroke="currentColor"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoHeart = React.memo(Heart);
export default MemoHeart;
