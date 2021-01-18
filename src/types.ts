export type JobType = {
  id: string;
  company_logo: string;
  company_url: string;
  created_at: string;
  how_to_apply: string;
  description: string;
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
  payload: Jobs;
};
export const JOBS_FILL_MORE = 'JOBS_FILL_MORE';
type JobsFillMoreAction = {
  type: typeof JOBS_FILL_MORE;
  payload: Jobs;
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
export const INREASE_PAGE = 'INREASE_PAGE';
type inreasePageAction = {
  type: typeof INREASE_PAGE;  
};
export const RESET_PAGE = 'RESET_PAGE';
type resetPageAction = {
  type: typeof RESET_PAGE;  
};

export type JobsActionTypes =
  | JobsStartFetchingAction
  | JobsStopFetchingAction
  | JobsFillAction
  | JobsFillMoreAction
  | UpdateSearchValueAction
  | fulltimeSwitchAction
  | inreasePageAction
  | resetPageAction;
