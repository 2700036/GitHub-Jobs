import { JobType } from './../types';
import { RootState } from './../reducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gitHubJobService from '../services/gitHubJobService';
import { useActions } from './useActions';

export const useGitHubJobService = () => {
  const { description, location, fullTime, jobs } = useSelector((state: RootState) => state);
  const { jobsStartFetching, jobsStopFetching, jobsFill } = useActions();
  
  useEffect(() => {
    jobsStartFetching();
    gitHubJobService.getJobs({}).then((res: Array<JobType>): void => {
      jobsFill(res);
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => jobsStopFetching())
   
  }, []);
  return { description, location, fullTime, jobs };
};
