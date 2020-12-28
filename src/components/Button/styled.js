import styled, { css, keyframes } from 'styled-components';
import colors from '../../constants/colors';

const backgroundAndBorderColor = (color) => css`
background: ${props => props.variant === 'ghost' ? 'none' : `${color}`};
color: ${props => props.variant === 'ghost' ? `${color}` : `#fff`};
border-color: ${props => props.isLoading ? `${colors.black30}` : `${color}`};
& svg {
  fill: ${props => props.variant === 'ghost' ? `${color}` : `#fff`};;    
}
`;
const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const StyledButton = styled.button`
  position: relative;
  height: ${props => props.size === 's' ? `32px` : `40px`};  
  padding: ${props => props.size === 's' ? `8px 16px` : `10px 24px`}; 
  padding-right: ${props => {
    if (props.icon && props.size === 's')return `10px`;
    if (props.icon)return `18px`;
}}; 
  font-family: Ubuntu, sans-serif;
  font-weight: 500;
  font-size: ${props => props.size === 's' ? `12px` : `14px`};  
  text-align: center;
  border-radius: 4px;  
  background: ${props => {
    if(props.isLoading && props.variant !== 'ghost')return colors.black30;    
    return props.variant === 'ghost' ? 'none' : `${colors.accent}`
}};  
  color: ${
    props => {
      if (props.isLoading)return `transparent`;
      return props.variant === 'ghost' ? `${colors.accent}` : `#fff`
    }
};  
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
  line-height:  ${props => props.size === 's' ? `16px` : `19px`};  
  user-select: none;
  align-items: center;
  display: flex;
  border: 1px solid ${props => props.isLoading ? `${colors.black30}` : `${colors.accent}`};
  pointer-events: ${props => props.isLoading ? `none` : `auto`};
  & svg {
    fill: ${props => props.variant === 'ghost' ? `${colors.accent}` : `#fff`};    
  }
  &:hover {       
    ${backgroundAndBorderColor(colors.accentDark)};
    };    
  
  &:active {
    ${backgroundAndBorderColor(colors.accentLink)};
  }
  &:disabled {
    ${backgroundAndBorderColor(colors.black30)};
    color: ${props => {
      if(props.isLoading)return `transparent`
    }};
    & .icon {
      fill: ${props => {
        if(props.isLoading)return `transparent`
      }}
    }
  }
    svg {
      fill: ${props => {
        if (props.isLoading) return `transparent`
    }};
  }
  
`;

export const StyledSpiner = styled.div`
  display: ${props => props.isLoading ? 'flex' : 'none'};
  position: absolute;
  width: ${props => props.size === 's' ? `0.9rem` : `1.2rem`}; 
  height: ${props => props.size === 's' ? `0.9rem` : `1.2rem`};  
  top: 50%;
  left: 50%;
  animation: ${rotate} 0.8s ease-in-out infinite;
  svg {
    fill: ${props => props.variant === 'ghost' ? `${colors.black30}` : `#fff`};
    width: 100%;
    height: 100%;
  } 
`;
