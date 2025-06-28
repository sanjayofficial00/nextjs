// customHook
// useCounterAnimation.js
import gsap from 'gsap';
import { useCallback } from 'react';

const useCounterAnimation = ({ refs, setCounter, contentRef, mainLoadingRef }) => {
    const startCounterAnimation = useCallback(() => {
        let count = 0;
        let lastUpdate = performance.now();
      
        const tick = (now) => {
          if (now - lastUpdate >= 40) {
            count += 1;
            setCounter((prev) => Math.min(prev + 1, 100));
            lastUpdate = now;
          }
      
          if (count < 100) {
            refs.current.counterInterval = requestAnimationFrame(tick);
          } else {
            gsap.to(contentRef.current, {
              opacity: 0,
              duration: 0.4,
              onComplete: () => {
                gsap.to(refs.current.canvas.map(ref => ref.current).reverse(), {
                  height: "0%",
                  duration: 0.5,
                  stagger: 0.2,
                  onStart: () => {
                    // Stop all matrix rain animations when canvas starts shrinking
                    refs.current.animationIds.forEach(id => cancelAnimationFrame(id));
                    refs.current.animationIds = [];
                  },
                  onComplete: () => {
                    gsap.to([mainLoadingRef.current], {
                      height: "0%",
                    });
                  },
                });
              },
            });
          }
        };
        refs.current.counterInterval = requestAnimationFrame(tick);
    }, [refs, setCounter, contentRef, mainLoadingRef]);
    return { startCounterAnimation };
  };
  
  export default useCounterAnimation;