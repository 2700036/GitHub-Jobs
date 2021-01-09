export type JobType = {
  id: string;
  company_logo: string;
  created_at: string;
  type: string;
  company: string;
  title: string;
  location: string;
};



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

export type JobsActionTypes = JobsStartFetchingAction | JobsStopFetchingAction | JobsFillAction;
