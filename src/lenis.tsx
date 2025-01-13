import { useEffect } from 'react';
import Lenis from 'lenis';

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
    //   smooth: true, 
      lerp: 0.1,    
    });

    const onAnimationFrame = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(onAnimationFrame);
    };

    requestAnimationFrame(onAnimationFrame);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
