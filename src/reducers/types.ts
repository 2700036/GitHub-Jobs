import { Jobs } from "../types";

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