import React from 'react';
import arrow from '../../images/up-arrow.svg';
import { StyledBackToTopButton } from './styled';
import { BackToTopButtonProps } from './types';

export default function BackToTopButton({ isVisible }: BackToTopButtonProps) {
  return (
    <StyledBackToTopButton
      className='visible'
      aria-label='Button to scroll back to top of page'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <img src={arrow} alt='' />
    </StyledBackToTopButton>
  );
}
