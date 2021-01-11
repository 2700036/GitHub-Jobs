import { useDispatch } from 'react-redux';
import {
  JobsActionTypes,
  JOBS_START_FETCHING,
  JOBS_STOP_FETCHING,
  JOBS_FILL,
  Jobs,
  FULLTIME_SWITCH,
  FieldInfo,
  UPDATE_SEARCH_VALUE,
} from '../types';

export const useActions = () => {
  const dispatch = useDispatch();
  const jobsStartFetching = (): JobsActionTypes =>
    dispatch({
      type: JOBS_START_FETCHING,
    });
  const jobsStopFetching = (): JobsActionTypes =>
    dispatch({
      type: JOBS_STOP_FETCHING,
    });
  const jobsFill = (payload: Jobs): JobsActionTypes =>
    dispatch({
      type: JOBS_FILL,
      payload,
    });
  const toggleFulltime = (): JobsActionTypes =>
    dispatch({
      type: FULLTIME_SWITCH,
    });
  const updateSearchField = (payload: FieldInfo): JobsActionTypes =>
    dispatch({
      type: UPDATE_SEARCH_VALUE,
      payload,
    });
  return {
    jobsStartFetching,
    jobsStopFetching,
    jobsFill,
    updateSearchField,
    toggleFulltime,
  };
};
