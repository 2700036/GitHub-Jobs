import { FieldInfo, FULLTIME_SWITCH, INREASE_PAGE, Jobs, JobsActionTypes, JOBS_FILL, JOBS_FILL_MORE, JOBS_START_FETCHING, JOBS_STOP_FETCHING, RESET_PAGE, UPDATE_SEARCH_VALUE } from "../types";
import { JobsState } from "./types";


// const isFieldInfo = (payload: any): payload is FieldInfo => {
//   return (<FieldInfo>payload).field !== undefined && (<FieldInfo>payload).value !== undefined;
// };

const initialState: JobsState = { 
  description: localStorage.getItem('description') || '',
  location: localStorage.getItem('location') || '',
  fullTime: !!localStorage.getItem('fullTime') || false,
  page: 1,
  jobs: [],
  isLoading: false,
};

const jobs = (state = initialState, action: JobsActionTypes): JobsState => {  
  switch (action.type) {    
    case JOBS_START_FETCHING:
      return { ...state, isLoading: true };
    case JOBS_STOP_FETCHING:
      return { ...state, isLoading: false };
    case JOBS_FILL:
      return { ...state, jobs: action.payload };
    case JOBS_FILL_MORE:
      return { ...state, jobs: [...state.jobs, ...action.payload] };
    case FULLTIME_SWITCH:      
      return { ...state, fullTime: !state.fullTime };
    case INREASE_PAGE:      
      return { ...state, page: ++state.page };
    case RESET_PAGE:          
      return { ...state, page: 1 };
    case UPDATE_SEARCH_VALUE: 
      const field: string = action.payload.field;      
      return { ...state, [field]: action.payload.value };

    default:
      const x: never = action;
    }
    return state;
};

export default jobs;

