import styled from "styled-components";
import colors from "../../constants/colors";

interface StyledNotFoundProps {
  isThemeDark?: boolean;
}

const StyledNotFound = styled.div<StyledNotFoundProps>`
  display: flex;  
  margin: auto;
  font-size: 18px;
  color: ${props => props.isThemeDark ? colors.gray : colors.grayDark}
`;

export default StyledNotFound;