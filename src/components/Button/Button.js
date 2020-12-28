import React from 'react';
import Spinner from './Spinner';
import { StyledButton } from './styled';

const Button = ({ children, ...props }) => {
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
