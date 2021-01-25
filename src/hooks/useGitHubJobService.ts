import { Jobs, JobsActionTypes } from './../types';
import { RootState } from './../reducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gitHubJobService from '../services/gitHubJobService';
import { useActions } from './useActions';

type ActionCreator = (payload: Jobs) => JobsActionTypes;
type HandleSearchJobs = (actionCreator: ActionCreator, isNewSearch?: boolean) => void;

export const useGitHubJobService = (a: void) => {
  const { description, location, fullTime, page, jobs, isLoading } = useSelector(
    (state: RootState) => state
  );
  const {
    jobsStartFetching,
    jobsStopFetching,
    jobsFill,
    jobsFillMore,
    inreasePage,
    resetPage,
  } = useActions();

  const handleSearchJobs: HandleSearchJobs = (actionCreator, isNewSearch) => {
    if (isNewSearch) jobsFill([]);
    jobsStartFetching();
    gitHubJobService
      .getJobs({ description, location, fullTime, page: isNewSearch ? 1 : page })
      .then((res) => {
        if (res.length >= 50) inreasePage();
        actionCreator(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => jobsStopFetching());
  };

  const searchJobs = () => {
    resetPage();
    handleSearchJobs(jobsFill, true);
  };
  const searchMoreJobs = () => handleSearchJobs(jobsFillMore);

  return { description, location, fullTime, jobs, searchJobs, searchMoreJobs, isLoading };
};
