import React from 'react';
import { useActions } from '../../hooks/useActions';
import check from '../../images/desktop/icon-check.svg';
import { StyledCheckbox, StyledCheckboxProps } from './styled';

interface CheckboxProps extends StyledCheckboxProps {
  children?: string
}

export default function Checkbox({ checked, children }: CheckboxProps) {
  const {toggleFulltime} = useActions();
  console.log(checked)
  return (
    <StyledCheckbox {...{ checked }}>
      <span  onClick={toggleFulltime}>
        <img src={check} alt='Checkmark' />
      </span>
      <small onClick={toggleFulltime}>{children}</small>
    </StyledCheckbox>
  );
}
