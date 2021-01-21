import React from 'react';
import { timeDifference } from '../../helpers/timeDiffererence';
import { useGitHubJobService } from '../../hooks/useGitHubJobService';
import { JobType } from '../../types';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';
import Button from '../../components/Button/Button';
import { StyledJobDetails } from './styled';
import { Props } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';

// const isJobType = (job: JobType | undefined): job is JobType => {
//   return (job as JobType).company_url !== void 0
// }

export default function JobDetails({ match }: Props) {
  const { jobs, isLoading } = useGitHubJobService();
  const isThemeDark: boolean = useSelector(({ isThemeDark }: RootState) => isThemeDark);
  const jobID: string = match.params.jobID;
  const job: JobType | undefined = jobs.find(({ id }) => id === jobID);

  const cleanURL = (url: string): string => {
    return (url = url && url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0]);
  };

  const validCompanySite = (url: string): boolean => {
    let valid = new RegExp(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
    );
    return valid.test(url);
  };

  const applyNowLink = (link: string): string | undefined => {
    let valid = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;
    return link.match(valid) ? link.match(valid)![0] : undefined;
  };

  window.scrollTo({
    top: 0,
    behavior: "smooth"
});

  return (
    <>
      {job && (
        <StyledJobDetails isThemeDark={isThemeDark}>
          <div className='job__listing__header'>
            <div className='header__image__container'>
              {job.company_logo && <img src={`${job.company_logo}`} alt={`company logo`} />}
              {!job.company_logo && <div className='no-logo'>n / a</div>}
            </div>
            <div className='header__textbox'>
              <div className='textbox__inner'>
                <h1 className='header__textbox__heading'>{job.company}</h1>
                <p className='header__textbox__site'>{cleanURL(job.company_url)}</p>
              </div>
              <div className={`header__textbox__company-redirect`}>
                {validCompanySite(job.company_url) && (
                  <Button onClick={() => window.open(job.company_url)}>Company site</Button>
                )}
              </div>
            </div>
          </div>
          <div className='job__listing__body'>
            <div className='body__heading'>
              <div className='body__heading__inner'>
                <p className='body__heading__time-type'>
                  <span className='body__heading__time'>
                    {timeDifference(Date.now(), Date.parse(job.created_at))}
                  </span>
                  <span style={{ margin: '0 10px' }}>•</span>
                  <span className='body__heading__type'>{job.type}</span>
                </p>
                <h2 className='body__heading__title'>{job.title}</h2>
                <p className='body__heading__location'>{job.location}</p>
              </div>
              {applyNowLink(job.how_to_apply) && (
                <Button onClick={() => window.open(applyNowLink(job.how_to_apply))}>Apply&nbsp;Now</Button>
              )}
            </div>
            <div className='body__main' dangerouslySetInnerHTML={{ __html: job.description }} />
          </div>
          <div className='job__listing__cta'>
            <h3 className='cta__heading'>How to Apply</h3>
            <br />
            <p className='cta__body' dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
          </div>
          <footer className='job__listing__footer'>
            <div className='footer__textbox'>
              <h4 className='footer__textbox__position'>{job.title}</h4>
              <small className='footer__textbox__company'>{job.company}</small>
            </div>
            {applyNowLink(job.how_to_apply) && (
              <Button onClick={() => window.open(applyNowLink(job.how_to_apply))}>Apply Now</Button>
            )}
          </footer>
          <BackToTopButton />
        </StyledJobDetails>
      )}
    </>
  );
}
