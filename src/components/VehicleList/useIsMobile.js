// useIsMobile.js
import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function clear(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth < 640;
      setIsMobile(isMobileDevice);
    };

    const debouncedHandleResize = debounce(handleResize, 100);

    // Initial check
    handleResize();

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
