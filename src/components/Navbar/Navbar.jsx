"use client";

// http://lucide.dev/icons/?search=close | light weight font
import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import TwoEyes from "./components/TwoEyes";
import NavItem from "./components/NavItem";

const FaVolumeOff = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaVolumeOff)
);
const GiSplitCross = dynamic(() =>
  import("react-icons/gi").then((mod) => mod.GiSplitCross)
);

const MenuData = [
  { menu: "Home", link: "/" },
  { menu: "Works", link: "/works" },
  { menu: "About", link: "/about" },
  { menu: "Contact", link: "/contact" },
  { menu: "", link: "" },
  { menu: "Blogs", link: "/blogs" },
];

const svgVariants = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  finish: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const [showNavIcon, setShowNavIcon] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [svgHeight, setSvgHeight] = useState(50);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) {
      setSvgHeight(43);
    } else if (width >= 640 && width < 1024) {
      setSvgHeight(45);
    } else {
      setSvgHeight(50);
    }
  }, []);

  useEffect(() => {
    setShowNavIcon(true);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const renderNavItems = useMemo(() => 
    MenuData.map((item, index) => (
      <Link
        key={index}
        href={item.link}
        className="flex items-center"
        onClick={() => setActiveLink(item.link)}
      >
        <NavItem 
          item={item} 
          isActive={activeLink === item.link} 
          showIcon={showNavIcon} 
        />
      </Link>
    ))
  , [activeLink, showNavIcon]);

  return (
    <nav className='w-full h-[12.5vh] flex justify-center fixed overflow-hidden z-[99]'>
        <motion.div
        initial={{ height: "0px" }}
        animate={{ height: "70px" }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="navBar w-[92%] lg:w-[95%]"
      >
        <div className="w-full h-[64px] flex items-center justify-between">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "linear" }}
            className="leftNav w-[70px] border-x-[1px] border-dotted my-[0.5vw]"
          >
            <svg
              width="65"
              height={svgHeight}
              viewBox="0 -30 295 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group">
                <motion.path
                  variants={svgVariants}
                  initial="start"
                  animate="finish"
                  id="K"
                  d="M89 3L61 300"
                  stroke="#fde92f"
                  strokeWidth="70"
                />
                <motion.path
                  variants={svgVariants}
                  initial="start"
                  animate="finish"
                  id="S"
                  d="M248 134C299 93.0001 299 -4.00009 230 12C161 28.0001 114 99.0001 114 99.0001C114 99.0001 46.9999 184 120 206C120 206 132 217 230 218C230 218 317 212 248 323C248 323 219 379 106 412C106 412 -53 443 39 332"
                  stroke="#fde92f"
                  strokeWidth="70"
                />
              </g>
            </svg>
          </motion.div>
  
          <div className="w-fit h-fit flex items-center">
            <TwoEyes />
          </div>
  
          <div className="hidden sm:flex justify-center gap-[2vw]">
            {renderNavItems}
          </div>
  
          <div className="flex gap-2">
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex w-fit h-full items-center bg-orange-300 p-1 sm:p-2 rounded-md"
            >
              <FaVolumeOff className="text-3xl" />
            </motion.div>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex w-fit h-full items-center bg-orange-300 p-1 sm:p-2 rounded-md sm:hidden"
            >
              <GiSplitCross className="text-3xl" />
            </motion.div>
          </div>
        </div>
  
        <div className="progressbarDiv w-[100%] h-2 bg-orange-400 border-[1px]"></div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
