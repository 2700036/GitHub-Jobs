import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  max-width: 1900px;
  width: 100%;
  flex-grow: 1;
  padding: 0 9vw 5vh;
  margin: 0 auto;
  @media (max-width: 600px) {
    padding: 0 3vw 5vh;
  }
  `;

export default StyledHome;
