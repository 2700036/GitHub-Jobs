import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StyledJobItem from './styled';
import { JobItemPropTypes } from './types';
export default function JobItem({ logo, date, lengthTerm, company, jobTitle, location, id }: JobItemPropTypes) {
  return (
    <Link to={id}>
      <StyledJobItem {...{ logo }}>
        <div className='thumbnail__image__container'>
          <div className='thumbnail__image__container_bg'></div>
          <div className='thumbnail__image__container_box'>
            {logo && <img src={logo} alt={`${company} company logo`} />}
            {!logo && <div className='no-logo'>n / a</div>}
          </div>
        </div>
        <p className='thumbnail__time-type'>
          <span className='thumbnail__time'>{date}</span>
          <span style={{ margin: '0 10px' }}>•</span>
          <span className='thumbnail__type'>{lengthTerm}</span>
        </p>
        <h3 className='thumbnail__title'>{jobTitle}</h3>

        <p className='thumbnail__company'>{company}</p>
        <span className='thumbnail__location'>{location}</span>
      </StyledJobItem>
    </Link>
  );
}
