import React from "react";

const ProgressBar = React.memo(({ counter, progressRef }) => (
  <div
    ref={progressRef}
    className="w-full h-[2vw] lg:h-[1vw] mt-[10vw] md:mt-[3vw] lg:mt-[3vw] relative"
  >
    <div className="absolute inset-0 flex items-center">
      <div className="w-full h-[50%] flex items-center z-10">
        <span
          className="h-full rounded-[1vw] flex justify-center bg-white"
          style={{ width: `${counter}%` }}
        ></span>
        <span className="min-w-[10px] min-h-[10px] w-[2vw] h-[2vw] lg:w-[0.8vw] lg:h-[0.8vw] rounded-full bg-white" />
      </div>
      <div className="w-full h-[0.1vh] bg-white absolute top-1/2"></div>
    </div>
  </div>
));

export default ProgressBar;
