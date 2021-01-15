import { Jobs } from './../types';
import { RootState } from './../reducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gitHubJobService from '../services/gitHubJobService';
import { useActions } from './useActions';

export const useGitHubJobService = (a: void) => {
  const { description, location, fullTime, jobs, isLoading } = useSelector((state: RootState) => state);
  const { jobsStartFetching, jobsStopFetching, jobsFill, updateSearchField, toggleFulltime } = useActions();

  const searchJobs = (): void => {
    const savedDescription = localStorage.getItem('description');
    const savedLocation = localStorage.getItem('location');
    const savedFullTime: boolean = !!localStorage.getItem('fullTime');
    if (savedDescription) updateSearchField({ field: 'description', value: savedDescription });
    if (savedLocation) updateSearchField({ field: 'location', value: savedLocation });
    // if (savedFullTime && !fullTime) toggleFulltime();
    
    
    jobsStartFetching();
    
    gitHubJobService
      .getJobs({ description, location, fullTime })
      .then((res) => {
        jobsFill(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => jobsStopFetching());
  };

  return { description, location, fullTime, jobs, searchJobs, isLoading };
};
