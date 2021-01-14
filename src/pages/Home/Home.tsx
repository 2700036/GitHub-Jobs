import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import JobItem from '../../components/JobItem/JobItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import { timeDifference } from '../../helpers/timeDiffererence';
import { JobType } from '../../types';
import JobsContainer from '../../components/JobsContainer/JobsContainer';
import StyledHome from './styled';
import { useGitHubJobService } from '../../hooks/useGitHubJobService';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';


export default function Home() {  
  const { jobs } = useGitHubJobService();  
  return (
    <StyledHome>
      <SearchBar />
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
      <BackToTopButton />
    </StyledHome>
  );
}
