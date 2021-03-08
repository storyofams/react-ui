import * as React from 'react';

function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M7.774 3.861h1.713l3.327 4.237-3.327 4.237H7.774l2.806-3.559H2.6V7.42h7.98L7.774 3.861z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoArrow = React.memo(Arrow);
export default MemoArrow;
