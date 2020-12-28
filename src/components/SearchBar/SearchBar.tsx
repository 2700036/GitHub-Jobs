import React, { useState } from 'react';
import Arrow from '../../Icons/Arrow';
import check from '../../images/desktop/icon-check.svg';
import Button from '../Button/Button';
import StyledSearchBar from './StyledSearchBar';
// import './searchBar.css';


export default function SearchBar({...props}) {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <StyledSearchBar {...{isOpen}}>
      <div className='search__bar__description form__control'>
        <input
          placeholder='Filter by title, expertise...'
          aria-label='Enter company, title, or expertise here'
          onChange={(e) => e}
          value={''}
        />
        <button
          className='mobile-search-bar-deploy'
          aria-label='Button to deploy location & full time options'
          onClick={() => setIsOpen((isOpen)=>!isOpen)}
          type='button'
        >
          <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z'
              fill='#6E8098'
              fillRule='nonzero'
            />
          </svg>
        </button>
      </div>
      <div className='search__bar--inner'>
        <div className='search__bar__location form__control'>
          <input
            placeholder='Filter by location...'
            aria-label='Enter desired job location'
            onChange={(e) => e}
            value={''}
          />
        </div>
        <div className='search__bar__full-time form__control'>
          <span className={`checkbox checked`} onClick={() => ''}>
            <img src={check} alt='Checkmark' />
          </span>
          <small onClick={() => ''}>Full Time</small>
        </div>
        
      </div>
      <Button isLoading={false} icon={<Arrow />} size='m'>
        Search
      </Button>
    </StyledSearchBar>
  );
}
