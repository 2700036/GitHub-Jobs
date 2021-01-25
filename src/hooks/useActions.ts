import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers/types';

import {
  JobsActionTypes,
  JOBS_START_FETCHING,
  JOBS_STOP_FETCHING,
  JOBS_FILL,
  JOBS_FILL_MORE,
  Jobs,
  FULLTIME_SWITCH,
  FieldInfo,
  UPDATE_SEARCH_VALUE,
  INREASE_PAGE,
  RESET_PAGE,
  TOGGLE_THEME,
} from '../types';

export const useActions = () => {
    const isThemeDark: boolean = useSelector(({ app }: RootState) => app.isThemeDark);
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
  const jobsFillMore = (payload: Jobs): JobsActionTypes =>
    dispatch({
      type: JOBS_FILL_MORE,
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
  const inreasePage = (): JobsActionTypes =>
    dispatch({
      type: INREASE_PAGE,
    });
  const resetPage = (): JobsActionTypes =>
    dispatch({
      type: RESET_PAGE,
    });
  const toggleTheme = (): JobsActionTypes =>
    dispatch({
      type: TOGGLE_THEME,
    });
  const handleThemeChange = (): void => {
    if(isThemeDark){
      localStorage.removeItem('isThemeDark');      
    } else {
      localStorage.setItem('isThemeDark', 'true')
    };
    toggleTheme();
  };

  return {
    jobsStartFetching,
    jobsStopFetching,
    jobsFill,
    jobsFillMore,
    updateSearchField,
    toggleFulltime,
    inreasePage,
    resetPage,
    handleThemeChange,
  };
};
