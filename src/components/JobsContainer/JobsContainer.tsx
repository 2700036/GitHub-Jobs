import React from 'react';
import StyledJobsContainer from './styled';


type JobsContainerPropTypes = {
  children?: JSX.Element[];
};

export default function JobsContainer({ children }: JobsContainerPropTypes) {
  return <StyledJobsContainer>{children}</StyledJobsContainer>;
}
