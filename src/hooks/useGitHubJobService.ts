import { Jobs, JobsActionTypes } from './../types';
import { useSelector } from 'react-redux';
import gitHubJobService from '../services/gitHubJobService';
import { useActions } from './useActions';
import { JobsState, RootState } from '../reducers/types';

type ActionCreator = (payload: Jobs) => JobsActionTypes;
type HandleSearchJobs = (actionCreator: ActionCreator, isNewSearch?: boolean) => void;

export const useGitHubJobService = (a: void) => {
  const { description, location, fullTime, page, jobs, isLoading } = useSelector(
    ({ jobs, app }: RootState): JobsState => ({ ...jobs, ...app })
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
    jobsStartFetching();
    gitHubJobService
      .getJobs({ description, location, fullTime, page: isNewSearch ? 1 : page })
      .then((res) => {
    if (isNewSearch) jobsFill([]);
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
