import styled from "styled-components";
import colors from "../../constants/colors";

export const StyledBackToTopButton = styled.button`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 2px solid var(--back-to-top);
  bottom: ${({className}) => className?.includes('visible') ? '50px' : '-50px'};
  right: 9vw;
  cursor: pointer;
  
  & img {
    height: 22px;
    transition: 0.3s;    
  }
  &:hover img {
    transform: translateY(4px);
  }
  visible {
    bottom: 50px !important;
  }

`