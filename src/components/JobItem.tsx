import React, { useState } from 'react';


export default function JobItem({ logo ='', date='0', lengthTerm=0, company=0, jobTitle=0, location=0, id=0 }) {
  const colors = ['#8d47ff', '#235cdf', '#daa278', '#68ab97', '#bb4643', '#e7de63'];
    const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);
  
  return (
    <div className="job__board__thumbnail">
                <div className="thumbnail__image__container">
                    { logo && (<img src={logo} alt={`${company} company logo`} />) }
                    { !logo && ( <div className="no-logo" style={{backgroundColor: color}}>n / a</div> )}
                </div>
                <p className="thumbnail__time-type">
                    <span className="thumbnail__time">{date}</span> 
                    <span style={{margin: "0 10px"}}>•</span>
                    <span className="thumbnail__type">{lengthTerm}</span>
                </p>
                <h3 className="thumbnail__title" >{jobTitle}</h3>
                    
                <p className="thumbnail__company">{company}</p>
                <span className="thumbnail__location">
                {location}
                </span>
                    
            </div>
  )
}
