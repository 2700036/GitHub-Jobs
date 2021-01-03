import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import JobItem from '../../components/JobItem/JobItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import { timeDifference } from '../../helpers/timeDiffererence';
import arrow from '../../images/up-arrow.svg';
import { HomePropTypes } from './types';
import { JobType } from '../../types';
import JobsContainer from '../../components/JobsContainer/JobsContainer';
import StyledHome from './styled';




export default function Home({ jobs }: HomePropTypes) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [scroll, setScroll] = useState(window.pageYOffset);

  useEffect(() => {
    function updateScrollHeight() {
      setWindowHeight(window.innerHeight);
      setScroll(window.pageYOffset);
    }
    window.addEventListener('scroll', updateScrollHeight);
    updateScrollHeight();
    return () => window.removeEventListener('scroll', updateScrollHeight);
  }, [windowHeight, scroll]);

  return (
    <StyledHome>
      <SearchBar />
      <>
        <JobsContainer>
          {jobs?.map((job: JobType) => (
              <JobItem
                key={job.id}
                id={job.id}
                logo={job.company_logo}
                date={timeDifference(Date.now(), Date.parse(job.created_at))}
                lengthTerm={job.type}
                company={job.company}
                jobTitle={job.title}
                location={job.location}
              />
            ))}
        </JobsContainer>
        <Button>Load More</Button>

        {scroll >= windowHeight * 2 && (
          <button
            className='back-to-top'
            aria-label='Button to scroll back to top of page'
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={arrow} alt='' />
          </button>
        )}
      </>
    </StyledHome>
  );
}
