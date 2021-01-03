import React, { useState } from 'react';
import StyledJobItem from './styled';
import { JobItemPropTypes } from './types';
export default function JobItem({
  logo,
  date,
  lengthTerm,
  company,
  jobTitle,
  location,
  
}: JobItemPropTypes) {
  const colors = ['#8d47ff', '#235cdf', '#daa278', '#68ab97', '#bb4643', '#e7de63'];
  const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);

  return (
    <StyledJobItem>
      <div className='thumbnail__image__container'>
        {logo && <img src={logo} alt={`${company} company logo`} />}
        {!logo && (
          <div className='no-logo' style={{ backgroundColor: color }}>
            n / a
          </div>
        )}
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
  );
}
