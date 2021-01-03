import styled, { css } from 'styled-components';

const StyledJobsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px 15px;
  margin: 70px auto 90px;
  width: 100%;
  & a {
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 950px) {    
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 60px 10px;   
  }
  @media (max-width: 600px) {    
      grid-template-columns: 1fr;
      grid-gap: 70px 0;
      margin: 60px auto 50px;
   }
`;

export default StyledJobsContainer;
