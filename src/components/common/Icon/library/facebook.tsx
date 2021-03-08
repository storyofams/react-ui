import * as React from 'react';

function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M15.75 8A7.749 7.749 0 008 .25 7.749 7.749 0 00.25 8a7.753 7.753 0 006.54 7.656V10.24H4.82V8h1.97V6.293c0-1.943 1.155-3.016 2.926-3.016.848 0 1.735.152 1.735.152v1.906h-.977c-.963 0-1.263.598-1.263 1.21V8h2.15l-.344 2.24H9.21v5.416A7.753 7.753 0 0015.75 8z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoFacebook = React.memo(Facebook);
export default MemoFacebook;
