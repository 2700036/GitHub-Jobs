import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/types';
import StyledNotFound from './styled';


export default function NotFound() {
    const isThemeDark: boolean = useSelector(({ app }: RootState) => app.isThemeDark);
  return (
    <StyledNotFound isThemeDark={isThemeDark}>
      <p>Nothing found</p>
    </StyledNotFound>
  )
}
