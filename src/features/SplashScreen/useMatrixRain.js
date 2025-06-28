// useMatrixRain.js
import { useCallback } from 'react';

const useMatrixRain = (canvasRefs) => {
    const drawMatrixRain = useCallback((canvas) => {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
    
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);
    
        const draw = () => {
          ctx.fillStyle = `rgba(13, 13, 13, 0.1)`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "#00ff00";
          ctx.font = `${fontSize}px monospace`;
    
          for (let i = 0; i < columns; i++) {
            const text = Math.random() > 0.5 ? "0" : "1";
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              drops[i] = 0;
            }
            drops[i]++;
          }
          const requestId = requestAnimationFrame(draw);
          canvasRefs.current.animationIds.push(requestId);
        };
    
        draw();
        return () => {
          canvasRefs.current.animationIds.forEach(id => cancelAnimationFrame(id));
          canvasRefs.current.animationIds = [];
        };
    }, [canvasRefs]);
    
    return { drawMatrixRain };
  };
  
  export default useMatrixRain;