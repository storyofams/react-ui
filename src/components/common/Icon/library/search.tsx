/* istanbul ignore file */
import * as React from 'react';

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M6.174 10.348a4.174 4.174 0 100-8.348 4.174 4.174 0 000 8.348zM9.122 9.122L14 14"
        stroke="currentColor"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  );
}

const MemoSearch = React.memo(Search);
export default MemoSearch;
