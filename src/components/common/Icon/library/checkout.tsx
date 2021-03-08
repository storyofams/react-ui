import * as React from 'react';

function Checkout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M5 5v-.667c0-.884.316-1.732.879-2.357C6.44 1.351 7.204 1 8 1v0c.394 0 .784.086 1.148.254a3 3 0 01.973.722c.279.31.5.677.65 1.082.151.404.229.838.229 1.275V5M12.846 6H3.154L1 15h14l-2.154-9z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoCheckout = React.memo(Checkout);
export default MemoCheckout;
