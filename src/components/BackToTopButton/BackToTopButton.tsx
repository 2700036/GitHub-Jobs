import React, { useEffect, useRef } from 'react';
import arrow from '../../images/up-arrow.svg';
import { StyledBackToTopButton } from './styled';
import { BackToTopButtonProps } from './types';

export default function BackToTopButton({ isVisible }: BackToTopButtonProps) {
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isVisible && button.current) button.current.style.bottom = '7vh';
    if (!isVisible && button.current) button.current.style.bottom = '-15vh';
  }, [isVisible]);

  return (
    <StyledBackToTopButton {...{isVisible}}
      ref={button}
      aria-label='Button to scroll back to top of page'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <img src={arrow} alt='' />
    </StyledBackToTopButton>
  );
}
