import React from 'react';
import Button from '../../components/Button/Button';
import JobItem from '../../components/JobItem/JobItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import { timeDifference } from '../../helpers/timeDiffererence';
import { JobType } from '../../types';
import JobsContainer from '../../components/JobsContainer/JobsContainer';
import StyledHome from './styled';
import { useGitHubJobService } from '../../hooks/useGitHubJobService';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';
import Spinner from '../../components/Button/Spinner';
import NotFound from '../../components/NotFound/NotFound';



export default function Home() {  
  const { jobs, searchMoreJobs, isLoading } = useGitHubJobService(); 
  const isFullPage = jobs.length > 0 && jobs.length % 50 === 0;
  
  
  return (
    <StyledHome>
      <SearchBar />
      {jobs.length > 0  && <JobsContainer>
        
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
      </JobsContainer>}
      {jobs.length < 1 && !isLoading && <NotFound />}
         {isLoading && !jobs.length && <Spinner isLoading={isLoading} size='l' variant='ghost'/>}
      {isFullPage && <Button isLoading={isLoading} onClick={searchMoreJobs} >Load More</Button>}
      <BackToTopButton />
    </StyledHome>
  );
}
