import styled, { css } from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  max-width: 1900px;
  width: 100%;
  min-height: 100vh;
  padding: 0 9vw;
  margin: 0 auto;
  & .back-to-top {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 2px solid var(--back-to-top);
    bottom: 50px;
    right: 9vw;
    cursor: pointer;
    & img {
      height: 22px;
      transition: 0.3s;
      
    }
    &:hover img {
      transform: translateY(4px);
    }
  }
  `;

export default StyledHome;
