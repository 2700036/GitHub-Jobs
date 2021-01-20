import styled from 'styled-components';
import colors from './constants/colors';

interface StyledAppProps {
  readonly isThemeDark: boolean;
};

const StyledApp = styled.div<StyledAppProps>`
  background-color: ${props => props.isThemeDark ? colors.midnight : colors.background };
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default StyledApp;
