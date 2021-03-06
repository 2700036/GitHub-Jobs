import styled from 'styled-components';
import colors from '../../constants/colors'


interface StyledHeaderProps {
  readonly isThemeDark: boolean;
};

const StyledHeader = styled.div<StyledHeaderProps>`
  display: flex;
  position: relative;
  align-items: center;
  min-height: 140px;

  & .header__backgrounds {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 140px;
    & img {
      max-width: 100%;
      width: 100%;
      border-bottom-left-radius: 80px;
    }
  }
  & .header__logo {
    color: ${colors.white};
    font-size: 30px;
  }
  & .header__inner {
    display: flex;
    position: absolute;
    justify-content: space-between;
    width: 100%;
    padding: 0 9vw;
    & .header__toggle {
      display: flex;
      align-items: center;
      & button {
        position: relative;
        margin: 0 15px;
        height: 20px;
        width: 40px;
        border: 0;
        border-radius: 10px;
        cursor: pointer;
        & .slider {
          position: absolute;
          height: 14px;
          width: 14px;
          top: 3px;
          left: 4px;
          border: 0;
          border-radius: 50%;
          background-color: ${colors.second};
          ${props => {
            if(props.isThemeDark) return `transform: translateX(calc(100% + 4px));`} 
          }
          transition: 0.2s;
        }
 
      }
    }
  }
  @media (max-width: 600px) {
    min-height: 200px;
    & .header__backgrounds {
      min-height: 200px;
      overflow: hidden;
      & img {
        transform: translateX(-53px) scaleX(1.5);
      }
    }
  }
`;

export default StyledHeader;