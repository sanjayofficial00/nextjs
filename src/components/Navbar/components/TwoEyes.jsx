"use client"

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const TwoEyes = () => {
  const [angles, setAngles] = useState({ left: 0, right: 180 });
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);
  const blackCircleRef = useRef(null);
  const animationFrame = useRef(null);

  // Memoized pointer move handler
  const handlePointerMove = useCallback((e) => {
    if (!leftLineRef.current || !rightLineRef.current || !blackCircleRef.current) return;

    // Get pointer position
    const pointerX = e.clientX;
    const pointerY = e.clientY;

    // Get circle positions
    const leftDims = leftLineRef.current.getBoundingClientRect();
    const rightDims = rightLineRef.current.getBoundingClientRect();
    
    const leftX = leftDims.left + leftDims.width / 2;
    const leftY = leftDims.top + leftDims.height / 2;
    const rightX = rightDims.left + rightDims.width / 2;
    const rightY = rightDims.top + rightDims.height / 2;

    // Calculate angles
    const leftAngle = Math.atan2(pointerY - leftY, pointerX - leftX) * (180 / Math.PI);
    const rightAngle = Math.atan2(pointerY - rightY, pointerX - rightX) * (180 / Math.PI);

    // Use requestAnimationFrame for smooth updates
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    
    animationFrame.current = requestAnimationFrame(() => {
      setAngles({ left: leftAngle, right: rightAngle });
    });
  }, []);

  // Event listeners with throttling
  useEffect(() => {
    const handleMouseMove = (e) => handlePointerMove(e);
    const handleTouchMove = (e) => handlePointerMove(e.touches[0]);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [handlePointerMove]);

  const lineCss = "w-[30%] h-5 relative top-[25%] left-1/2 origin-left";

  return (
    <motion.div 
      initial={{opacity:0}} 
      animate={{opacity:1}} 
      transition={{delay:1, duration:2, ease: "easeInOut"}} 
      className="circleBox flex gap-3 justify-between"
    >
      {["leftLine", "rightLine"].map((line, index) => (
        <div
          key={index}
          className="whiteCircle w-[40px] h-[40px] bg-zinc-100 rounded-full relative"
        >
          <div
            ref={blackCircleRef}
            className="blackCircle w-[25px] h-[25px] rounded-full bg-zinc-900 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div
              ref={index === 0 ? leftLineRef : rightLineRef}
              className={`${line} ${lineCss}`}
              style={{
                transform: `rotate(${index === 0 ? angles.left : angles.right}deg)`,
                willChange: 'transform' // Optimize for animations
              }}
            >
              <div className="w-[8px] h-[8px] rounded-full bg-zinc-100 absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>    
  );
};

export default TwoEyes;
