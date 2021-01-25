import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import check from '../../images/desktop/icon-check.svg';
import { RootState } from '../../reducers/types';
import { StyledCheckbox, StyledCheckboxProps } from './styled';

interface CheckboxProps extends StyledCheckboxProps {
  children?: string;
}

export default function Checkbox({ checked, children }: CheckboxProps) {
  const { toggleFulltime } = useActions();

  useEffect(() => {
    checked ? localStorage.setItem('fullTime', 'true') : localStorage.removeItem('fullTime');
  }, [checked])

  return (
    <StyledCheckbox {...{ checked }}>
      <span onClick={toggleFulltime}>
        <img src={check} alt='Checkmark' />
      </span>
      <small onClick={toggleFulltime}>{children}</small>
    </StyledCheckbox>
  );
}
