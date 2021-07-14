/* istanbul ignore file */
import * as React from 'react';

function Twitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M14.355 4.741c.01.143.01.285.01.427 0 4.335-3.299 9.33-9.33 9.33A9.267 9.267 0 010 13.026c.264.03.518.04.792.04a6.568 6.568 0 004.07-1.4A3.285 3.285 0 011.798 9.39c.203.03.406.051.62.051.294 0 .588-.04.862-.112A3.28 3.28 0 01.65 6.112v-.04c.437.243.945.395 1.483.416A3.277 3.277 0 01.67 3.757c0-.61.162-1.168.447-1.655a9.321 9.321 0 006.761 3.431 3.702 3.702 0 01-.081-.75 3.278 3.278 0 013.28-3.28c.943 0 1.796.396 2.395 1.035a6.455 6.455 0 002.081-.791 3.27 3.27 0 01-1.441 1.807c.66-.071 1.3-.254 1.888-.508a7.048 7.048 0 01-1.645 1.695z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoTwitter = React.memo(Twitter);
export default MemoTwitter;
