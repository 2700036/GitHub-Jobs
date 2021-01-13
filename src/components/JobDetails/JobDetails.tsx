import React from 'react';
import { timeDifference } from '../../helpers/timeDiffererence';
import { useGitHubJobService } from '../../hooks/useGitHubJobService';
import BackToTopButton from '../BackToTopButton/BackToTopButton';
import { StyledJobDetails } from './styled';


const job = {
company: "Excelerate America",
company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazJWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e26dcd3bdc87a8d444428f600e5e4722b40e9cef/LogoEaStacked-20.jpg",
company_url: "https://www.excelerateamerica.com/",
created_at: "Wed Jan 13 15:59:23 UTC 2021",
description: "<h2>Company Overview:</h2>↵<p>Excelerate America (EA) is a network for small business entrepreneurs to transform their businesses from small to mighty. Collaborating with a diverse set of partners and communities, EA brings together a community wanting to help each other thrive; through inspiration, problem-solving, and access to curated products and services. The next phase of EA’s growth is to develop a dynamic and engaging mobile community platform driven by peer-to-peer problem-solving. This platform will help EA scale and connect its existing communities to power-up entrepreneurs' abilities to work together, get guidance from peers, and have a greater impact in their local communities.</p>↵<h2>Job Overview:</h2>↵<p>The Backend engineer works as a leading member of EA’s growing software and product technology team to help architect, develop, and launch EA’s platform.</p>↵<p>As a critical member of the product team, the Backend Engineer will work closely with the founding leadership and product development team to architect EA’s data structure, learning algorithms, and front-end integrations to build a platform that delivers a personalized and cutting edge experience to our users and partners. You will be one of the founding software engineers working closely with our Engineering Lead to design our new platform, help to scale it, and establish the way we work as a software-oriented organization. We are a company focused on our users and instill a human-centered approach, thus giving you the opportunity to go beyond development and participate in the design and creative thinking needed to build an exceptional end to end platform for our members.</p>↵<p>Excelerate America is a Detroit-based organization. We believe in a flexible work environment with 3 days in-office, 2 days remote approach to allow for cross-disciplinary collaboration. The Back End Engineer role is preferred to be co-located in Detroit with the product team. Remote will be considered.</p>↵<h2>Responsibilities and Duties:</h2>↵<ul>↵<li>Work with EA Dev team to develop EA APIs and EA Server-side Apps and documentation</li>↵<li>Document and test all EA APIs and EA Server-Side Apps and help build a culture of testing throughout our build process</li>↵<li>Setup, configure and monitor the various EA servers, hosting, and databases including dev, staging, production for both EA marketing sites and EA platform</li>↵<li>Setup, maintain, test, and create authentication, payment, and other gateways</li>↵<li>Setup repos in Git and workflows for continuous integration</li>↵<li>Troubleshoot server issues and performance bottlenecks</li>↵<li>Capable of scaling applications to handle the load changes.</li>↵<li>Design, implement, maintain and automate the appropriate backup and recovery architecture as required</li>↵</ul>↵<h2>Qualifications:</h2>↵<ul>↵<li>Bachelors of Computer Science or equivalent learning/experience</li>↵<li>5+ years of experience in engineering including experience building, launching and scaling a consumer or enterprise product or platform</li>↵<li>Deep understanding of NodeJs programming language and framework, including the development and optimization of server-less functions</li>↵<li>Deep understanding of databases NoSQL, MySQL as well as experience with and/or familiarity with GraphQL</li>↵<li>Proven experience working with multiple disciplines including business, front-end, and design and enjoy a highly collaborative environment</li>↵<li>Experience with agile development and/or sprint-based development</li>↵<li>Ability to set up development and production environments or the engineering teams including virtualization and container technology, GIT, and continuous integration workflows..</li>↵<li>Knowledge of security, privacy, and compliance as it applies to online users and payment gateways</li>↵<li>Basic knowledge of front-end technologies, such as HTML, CSS, and JavaScript, so that you can work closely with EA’s front-end development and design team</li>↵<li>Basic Knowledge of Machine Learning</li>↵</ul>↵",
how_to_apply: "<p><a href='https://www.linkedin.com/jobs/view/2334165591'>https://www.linkedin.com/jobs/view/2334165591</a></p>↵",
id: "e55930c6-0db3-4fad-ab97-094b074a3648",
location: "Detroit, MI",
title: "Back End Developer",
type: "Full Time",
url: "https://jobs.github.com/positions/e55930c6-0db3-4fad-ab97-094b074a3648"
}

export default function JobDetails() {
  const { jobs, isLoading } = useGitHubJobService();  
  const cleanURL = (url:string):string => {
    return (url = url && url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0]);
  };

  const validCompanySite = (url:string):boolean => {
    let valid = new RegExp(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
    );
    return valid.test(url);
  };

  const applyNowLink = (link:string):string | undefined => {
    let valid = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/;    
    return link.match(valid) ? link.match(valid)![1] : undefined;
  };

  return (    
      <StyledJobDetails>
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
            <div
              className={`header__textbox__company-redirect ${
                !validCompanySite(job.company_url) ? 'invalid' : ''
              }`}
            >
              <a className='btn' target='_blank' rel='noopener noreferrer' href={job.company_url}>
                Company site
              </a>
              <small>No company site</small>
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
            <a
              className='body__heading__redirect btn'
              href={applyNowLink(job.how_to_apply)}
              target='_blank'
              rel='noopener noreferrer'
            >
              Apply Now
            </a>
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
          <a
            className='footer__btn btn'
            href={applyNowLink(job.how_to_apply)}
            rel='noopener noreferrer'
            target='_blank'
          >
            Apply Now
          </a>
        </footer>
        <BackToTopButton />
      </StyledJobDetails>    
  );
}
