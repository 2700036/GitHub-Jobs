import { JobsActionTypes, FieldInfo, Jobs } from './types';


interface Action {
  type: string;
  payload: Jobs | FieldInfo;
}
const isFieldInfo = (payload: any): payload is FieldInfo => {
  return (<FieldInfo>payload).field !== undefined && (<FieldInfo>payload).value !== undefined;
};

const initialState = {
  description: localStorage.getItem('description') || '',
  location: localStorage.getItem('location') || '',
  fullTime: !!localStorage.getItem('fullTime') || false,
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
    case 'FULLTIME_SWITCH':      
      return { ...state, fullTime: !state.fullTime };
    case 'UPDATE_SEARCH_VALUE':
      if (!isFieldInfo(payload)) return state;
      const field: string = payload.field;      
      return { ...state, [field]: payload.value };

    default:
      return state;
  }
};

export type RootState = {
  description: string;
  location: string;
  fullTime: boolean;
  jobs: Jobs;
  isLoading: boolean;
};
