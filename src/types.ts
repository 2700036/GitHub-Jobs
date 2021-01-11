import { type } from 'os';

export type JobType = {
  id: string;
  company_logo: string;
  created_at: string;
  type: string;
  company: string;
  title: string;
  location: string;
};

export type Jobs = JobType[];

export const JOBS_START_FETCHING = 'JOBS_START_FETCHING';
type JobsStartFetchingAction = {
  type: typeof JOBS_START_FETCHING;
};

export const JOBS_STOP_FETCHING = 'JOBS_STOP_FETCHING';
type JobsStopFetchingAction = {
  type: typeof JOBS_STOP_FETCHING;
};

export const JOBS_FILL = 'JOBS_FILL';
type JobsFillAction = {
  type: typeof JOBS_FILL;
  payload: Array<JobType>;
};
export const FULLTIME_SWITCH = 'FULLTIME_SWITCH';
type fulltimeSwitchAction = {
  type: typeof FULLTIME_SWITCH;
};
export type FieldInfo = { field: string; value: string };
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';
type UpdateSearchValueAction = {
  type: typeof UPDATE_SEARCH_VALUE;
  payload: FieldInfo;
};

export type JobsActionTypes =
  | JobsStartFetchingAction
  | JobsStopFetchingAction
  | JobsFillAction
  | UpdateSearchValueAction
  | fulltimeSwitchAction;
