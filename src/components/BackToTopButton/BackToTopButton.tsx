import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import arrow from '../../images/up-arrow.svg';
import { RootState } from '../../reducer';
import { StyledBackToTopButton } from './styled';

export default function BackToTopButton() {
  const button = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isThemeDark: boolean = useSelector(({ isThemeDark }: RootState) => isThemeDark);

  useEffect(() => {
    function updateScrollHeight() {
      const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      setIsVisible(window.pageYOffset >= scrollHeight / 5);
    }
    window.addEventListener('scroll', updateScrollHeight);
    updateScrollHeight();
    return () => window.removeEventListener('scroll', updateScrollHeight);
  }, []);

  useEffect(() => {
    if (isVisible && button.current) button.current.style.bottom = '7vh';
    if (!isVisible && button.current) button.current.style.bottom = '-15vh';
  }, [isVisible]);

  return (
    <StyledBackToTopButton
      {...{ isVisible }}
      isThemeDark={isThemeDark}
      ref={button}
      aria-label='Button to scroll back to top of page'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <img src={arrow} alt='' />
    </StyledBackToTopButton>
  );
}
