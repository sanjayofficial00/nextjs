import React from "react";

const LoadingText = React.memo(({ loadingRef }) => (
  <div
    ref={loadingRef}
    className="text-[5vw] flex gap-1 lg:text-[2vw] lg:flex-col text-white"
  >
    <p>Please wait</p>
    <div className="min-w-[10ch] min-h-[1.5em] flex gap-4">
      <p>a few seconds</p>
      <span className="loader"></span>
    </div>
  </div>
));

export default LoadingText;
