import React from "react";

const Counter = ({ counter }) => (
  <span className="flex text-[4vw] lg:text-[3vw] lg:gap-2 pt-[3vw] lg:pt-[4vw] pl-[4vw] lg:pl-[5vw] lg:pr-[2vw] leading-none font-bold font-silkserifRegularitalic text-white">
    <h5 className="w-[7.5vw] h-full lg:w-[5vw]">
      {counter.toString().padStart(2, "0")}
    </h5>
    <h6>- 100</h6>
  </span>
);

export default React.memo(Counter);
