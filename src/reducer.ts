import { JobsActionTypes, JobType } from './types';

const initialState = {
  description: '',
  location: '',
  fullTime: '',
  jobs: [],
  isLoading: false,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case 'JOBS_START_FETCHING':
      return { ...state, isLoading: true };
    case 'JOBS_STOP_FETCHING':
      return { ...state, isLoading: false };
    case 'JOBS_FILL':
      return { ...state, jobs: payload };

    default:
      return state;
  }
};

export type RootState = {
  description: string;
  location: string;
  fullTime: boolean;
  jobs: Array<JobType>
  isLoading: boolean;
}
