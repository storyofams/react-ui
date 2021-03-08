import * as React from 'react';

function BadgeError(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <circle cx={8} cy={8} r={8} fill="currentColor" />
      <rect x={4} y={7} width={8} height={2} rx={1} fill="#fff" />
    </svg>
  );
}

const MemoBadgeError = React.memo(BadgeError);
export default MemoBadgeError;
