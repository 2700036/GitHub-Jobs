import { reducer } from ".";
import { Jobs } from "../types";

export type AppState = {  
  isThemeDark: boolean, 
}

export type JobsState = {  
  description: string,
  location: string,
  fullTime: boolean,
  page: number,
  jobs: Jobs,
  isLoading: boolean, 
}

export type RootState = ReturnType<typeof reducer>;

// type ValueOf<T> = T[keyof T];
// type ReducersTypes = ValueOf<RootState>;