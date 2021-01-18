import { JobType, Jobs } from './../types';
import { baseUrl } from '../constants/constants';
import { GetJobs, GitHubJobServiceInterface } from './types';

class GitHubJobService implements GitHubJobServiceInterface<Jobs> {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  getJobs: GetJobs<Jobs> = ({ description = '', location = '', fullTime = false, page }) => {
    const descriptionUrl: string = description.trim() ? `description=${description.replace(/ /g, '+')}` : '';
    const locationUrl: string = location.trim() ? `location=${location.replace(/ /g, '+')}` : '';
    const fullTimeUrl: string = fullTime ? `full_time=on` : '';
    const pageUrl: string = page ? `page=${page}` : '';
    const additionalQuery: string = [descriptionUrl, locationUrl, fullTimeUrl, pageUrl].filter(Boolean).join('&');
    localStorage.setItem('description', description);
    localStorage.setItem('location', location);
    if (fullTime) {
      localStorage.setItem('fullTime', 'true');
    } else {
      localStorage.removeItem('fullTime');
    }

    return fetch(this.baseUrl + additionalQuery, {
      method: 'GET',
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }
}

export default new GitHubJobService(baseUrl);
