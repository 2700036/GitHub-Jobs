import { Jobs } from "../types";

type ValueOf<T> = T[keyof T];

export type RootState = {
  jobs: {
  description: string;
  location: string;
  fullTime: boolean;
  page: number;
  jobs: Jobs;  
  isLoading: boolean;
  },
  app: {
    isThemeDark: boolean;    
  }
};

export type ReducersTypes = ValueOf<RootState>;