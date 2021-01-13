import { Jobs } from './../types';
import { RootState } from './../reducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gitHubJobService from '../services/gitHubJobService';
import { useActions } from './useActions';

export const useGitHubJobService = () => {
  const { description, location, fullTime, jobs, isLoading } = useSelector((state: RootState) => state);
  const { jobsStartFetching, jobsStopFetching, jobsFill } = useActions();
  
  const searchJobs = ():void => {
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
  }
  
  useEffect(() => {
    const savedDescription = localStorage.getItem('description');
    const savedLocation = localStorage.getItem('location');
    const savedFullTime: boolean = !!localStorage.getItem('fullTime');
    
  }, []);

  useEffect(() => {
    searchJobs()
  }, []);
  return { description, location, fullTime, jobs, searchJobs, isLoading };
};
