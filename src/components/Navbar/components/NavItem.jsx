'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const NavItem = React.memo(({ item, isActive, showIcon }) => {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  useEffect(() => {
    if (!firstTextRef.current || !secondTextRef.current) return;

    const tl = gsap.timeline();
    tl.to(firstTextRef.current, {
      delay: 2,
      opacity: 0,
    }).to(secondTextRef.current, {
      opacity: 1,
    });

    return () => tl.kill(); // cleanup to prevent memory leaks
  }, []);

  if (item.menu.length === 0) {
    return <span className="w-[1.3px] h-[80%] bg-white mt-[0.4vw] opacity-0 animate-fadeIn"></span>;
  }

  return (
    <div className="flex items-center gap-3">
      {isActive && showIcon && (
        <span
          className="inline-block w-1 h-1 mt-[0.4vw] bg-green-500 rounded"
          style={{ boxShadow: '0 0 0.5em #00FF35' }}
        />
      )}

      <div className="relative flex justify-center w-full h-full">
        {/* First Text Animation */}
        <div
          ref={firstTextRef}
          className="w-[7vw] h-full text-sm md:text-base lg:text-lg leading-none font-medium flex flex-col items-center"
        >
          <motion.div
            initial={{ y: -45, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
            className="relative overflow-hidden w-full h-3"
          >
            <span className="absolute block text-center w-full h-full top-0 left-0 pt-[0.3vw]">
              {item.menu}
            </span>
          </motion.div>

          <motion.div
            initial={{ y: 45, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
            className="relative overflow-hidden w-full h-3"
          >
            <span className="absolute block text-center w-full h-full top-[-100%] left-0 pt-[0.3vw]">
              {item.menu}
            </span>
          </motion.div>
        </div>

        {/* Second Text Reveal */}
        <div
          ref={secondTextRef}
          className="absolute w-[7vw] h-full top-1/2 transform -translate-y-1/2 opacity-0"
        >
          <div className="relative group text-sm md:text-base lg:text-lg font-medium overflow-hidden mx-[0.42vw]">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full hover:text-orange-300">
              {item.menu}
            </span>
            <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full hover:text-orange-300">
              {item.menu}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NavItem;
