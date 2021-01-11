export interface GitHubJobServiceInterface<T> {
  getJobs({ description, location, fullTime}: GetJobs): Promise<T>
}

type GetJobs = {
  description?: string, 
  location?: string, 
  fullTime?: boolean
}