"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Counter from "./Counter";
// import { useAppContext } from "@/context";
import Heading from "./Heading";
import ProgressBar from "./ProgressBar";
import LoadingText from "./LoadingText";
import useMatrixRain from "./useMatrixRain";
import useCounterAnimation from "./useCounterAnimation";

const SplashScreen = () => {
  const [counter, setCounter] = useState(0);

  const canvasRefs = useMemo(() => Array(4).fill(null).map(() => React.createRef()), []);
  const refs = useRef({
    canvas: canvasRefs,
    matrixIntervals: [],
    counterInterval: null,
    animationIds: [],
  });

  const mainLoadingRef = useRef(null);
  const contentRef = useRef(null);
  const loadingRef = useRef(null);
  const progressRef = useRef(null);

  const { drawMatrixRain } = useMatrixRain(refs);
  const { startCounterAnimation } = useCounterAnimation({
    refs,
    setCounter,
    contentRef,
    mainLoadingRef,
  });

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(contentRef.current, { opacity: 1, duration: 0.2 })
      .from("h1, h2", { y: 100, stagger: 0.2, duration: 0.5 })
      .from([loadingRef.current, progressRef.current], {
        opacity: 0,
        duration: 0.3,
        onStart: startCounterAnimation,
      });

    refs.current.matrixIntervals = refs.current.canvas.map((ref) => {
      const canvas = ref.current;
      if (canvas) {
        canvas.width = window.innerWidth / 4;
        canvas.height = window.innerHeight;
        return drawMatrixRain(canvas);
      }
      return () => {};
    });

    return () => {
      refs.current.matrixIntervals.forEach((cancel) => cancel && cancel());
      cancelAnimationFrame(refs.current.counterInterval);
      refs.current.animationIds.forEach(id => cancelAnimationFrame(id));
      refs.current.animationIds = [];
    };
  }, [drawMatrixRain, startCounterAnimation]);

  useEffect(() => {
    const handleResize = () => {
      refs.current.canvas.forEach((ref) => {
        if (ref.current) {
          ref.current.width = window.innerWidth / 4;
          ref.current.height = window.innerHeight;
        }
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
    ref={mainLoadingRef}
    className="fixed w-full h-full inset-0 flex justify-center"
    >
      <div className="absolute inset-0 flex">
        {refs.current.canvas.map((ref, i) => (
          <canvas key={i} ref={ref} className="w-1/2 h-full" />
        ))}
      </div>

      <div
        ref={contentRef}
        className="w-full h-fit px-[5vw] lg:px-[3vw] mt-[20vh] lg:mt-[8vh] z-[1] opacity-0 overflow-hidden"
      >
        <div className="w-full h-fit">
          <div className="flex items-center h-[12vw] lg:h-[8vw] gap-4 overflow-hidden">
            <Counter counter={counter} />
            <Heading text="Welcome!" className="text-[7.9vw]" />
          </div>
          <div className="flex items-center h-[12vw] lg:h-[8vw] overflow-hidden">
            <Heading text="My Portfolio is" className="text-[7.9vw]" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-[3.25vw] overflow-hidden">
            <div className="min-h-[12vh] lg:h-[10vw] flex items-center justify-center">
              <Heading text="Booting Up..." className="text-[7.9vw]" />
            </div>
          </div>
        </div>

        <div className="mt-[10vw] lg:mt-[3vw] flex justify-center lg:justify-start lg:pl-[20vw] overflow-hidden">
          <LoadingText loadingRef={loadingRef} />
        </div>

        <ProgressBar counter={counter} progressRef={progressRef} />
      </div>
    </div>
  );
};

export default React.memo(SplashScreen);
