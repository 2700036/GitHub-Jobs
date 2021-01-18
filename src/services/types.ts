import { Jobs } from './../types';
export interface GitHubJobServiceInterface<T> {
  baseUrl: string;
  getJobs: GetJobs<T>;
};

export type GetJobs<T> = ({ description, location, fullTime, page }: Query) => Promise<T>;

export type Query = {
  description?: string;
  location?: string;
  fullTime?: boolean;
  page?: number;
};
