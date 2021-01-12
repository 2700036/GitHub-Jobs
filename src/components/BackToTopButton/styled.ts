import styled from 'styled-components';
import colors from '../../constants/colors';
import { BackToTopButtonProps } from './types';

export const StyledBackToTopButton = styled.button<BackToTopButtonProps>`
  display: flex;
  visibility: ${({isVisible}) => isVisible ? 'visible' : 'hidden'};
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid ${colors.main};
  transition: bottom .5s ease, visibility 1s;
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
`;
