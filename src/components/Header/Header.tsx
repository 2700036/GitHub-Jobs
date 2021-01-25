import React from 'react';
import background from '../../images/desktop/bg-pattern-header.svg';
import sun from '../../images/desktop/icon-sun.svg';
import moon from '../../images/desktop/icon-moon.svg';
import StyledHeader from './styled';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { RootState } from '../../reducers/types';

export default function Header() {
    const isThemeDark: boolean = useSelector(({ app }: RootState) => app.isThemeDark);
  const { handleThemeChange } = useActions();
  return (
    <StyledHeader isThemeDark={isThemeDark}>
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
            onClick={handleThemeChange}
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
