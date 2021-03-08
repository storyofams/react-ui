import * as React from 'react';

function Volume(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M11.369 8c0-1.156-.64-2.152-1.591-2.667v5.333A3.04 3.04 0 0011.368 8zM1.778 6.222v3.555h2.666L8 13.333V2.666L4.444 6.222H1.778zm8-4.445v1.334A5.133 5.133 0 0113.333 8a5.133 5.133 0 01-3.555 4.889v1.333c2.8-.694 4.889-3.2 4.889-6.222 0-3.023-2.09-5.53-4.89-6.223z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoVolume = React.memo(Volume);
export default MemoVolume;
