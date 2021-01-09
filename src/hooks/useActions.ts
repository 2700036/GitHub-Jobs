import { useDispatch } from 'react-redux';
import { JobsActionTypes, JOBS_START_FETCHING, JOBS_STOP_FETCHING, JOBS_FILL, JobType } from '../types';


export const useActions = () => {
  const dispatch = useDispatch();
  const jobsStartFetching = (): JobsActionTypes => dispatch({
    type: JOBS_START_FETCHING,
  });
  const jobsStopFetching = (): JobsActionTypes => dispatch({
    type: JOBS_STOP_FETCHING,
  });
  const jobsFill = (payload: Array<JobType>): JobsActionTypes => dispatch({
    type: JOBS_FILL,
    payload,
  });
  return {
    jobsStartFetching,
    jobsStopFetching,
    jobsFill
  }
}