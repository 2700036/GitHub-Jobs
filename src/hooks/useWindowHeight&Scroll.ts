import React, { useEffect, useState } from 'react';

export default function useWindowHeightScroll() {
  const [scrollHeight, setScrollHeight] = useState(window.innerHeight);
  const [scrolledOfTop, setScrolledOfTop] = useState(window.pageYOffset);
  // const [isBackToTopButtonVisible, setIsBackToTopButtonVisible] = useState(false)
  useEffect(() => {
    function updateScrollHeight() {
      const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
        );
        setScrollHeight(scrollHeight);
        setScrolledOfTop(window.pageYOffset);      
      // setIsBackToTopButtonVisible(window.pageYOffset >= scrollHeight / 5)
    }
    window.addEventListener('scroll', updateScrollHeight);
    updateScrollHeight();
    return () => window.removeEventListener('scroll', updateScrollHeight);
  }, []);
  
  return {
    scrollHeight,
    scrolledOfTop
  }
}
