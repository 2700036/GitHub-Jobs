import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';
import StyledNotFound from './styled';


export default function NotFound() {
  const isThemeDark: boolean = useSelector(({ isThemeDark }: RootState) => isThemeDark);
  return (
    <StyledNotFound isThemeDark={isThemeDark}>
      <p>Nothing found</p>
    </StyledNotFound>
  )
}
