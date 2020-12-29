import React from 'react';
import Spinner from './Spinner';
import { StyledButton, StyledButtonProps } from './styled';

interface Button extends StyledButtonProps {
  children: string;  
}

const Button = ({ children, ...props }:Button) => {
  return (
    <StyledButton {...props}  >
      <>
        {children}
        <Spinner {...props} />
        {props.icon}
      </>
    </StyledButton>
  );
};

export default Button;
