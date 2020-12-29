import React from 'react';
import background from '../../images/desktop/bg-pattern-header.svg';
import sun from '../../images/desktop/icon-sun.svg';
import moon from '../../images/desktop/icon-moon.svg';
import StyledHeader from './styled';



export default function Header() {
  return (
    <StyledHeader>
      <div className='header__backgrounds'>
        <img className='background__desktop' src={background} alt='' />
      </div>
      <div className='header__inner'>
        <span className='header__logo'>GitHub Jobs</span>

        <div className='header__toggle'>
          <span>
            <img src={sun} alt='Sun illustration' />
          </span>
          <button
            className={`header__toggle__btn active`}
            aria-label='Set page theme to either light or dark'
            // onClick={() => ''}
          >
            <span className='slider' />
          </button>
          <span>
            <img src={moon} alt='Moon illustration' />
          </span>
        </div>
      </div>
    </StyledHeader>
  );
}