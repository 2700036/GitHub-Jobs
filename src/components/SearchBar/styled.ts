import styled from 'styled-components';
import iconSearch from '../../images/desktop/icon-search.svg';
import iconLocation from '../../images/desktop/icon-location.svg';
import colors from '../../constants/colors';

interface StyledSearchBarProps {
  readonly isOpen: boolean;
  readonly isThemeDark: boolean;
};

const StyledSearchBar = styled.form<StyledSearchBarProps>`
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${props => props.isThemeDark ? colors.blueDark : colors.white };
  color: ${props => props.isThemeDark ? colors.gray : colors.blueDark };
  padding: 0 10px;
  border-radius: 5px;
  width: 100%;
  height: 56px;
  z-index: 5;
  top: -28px;
  box-shadow: 0px 5px 15px -5px #0000003d;
  & .form__control input {
    padding: 20px 15px 20px 35px;
    font-family: inherit;
    border: 0;
    border-right: 1px solid ${props => props.isThemeDark ? colors.grayDark : colors.grayLight };
    background-color: transparent;
    color: ${props => props.isThemeDark ? colors.gray : colors.blueDark };
    width: 100%;
    & :placeholder {
      font-size: 0.9em;
      opacity: 0.75;
    }
  }
  & .search__bar__description {
    position: relative;
    background-image: url(${iconSearch});
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 16px;
    width: 40%;
    & button {
      display: none;
    }
  }
  & .search__bar--inner {
    display: flex;
    justify-content: space-between;
    width: 60%;
    & button {
      display: none;
    }
    & .search__bar__location {
      position: relative;
      background-image: url(${iconLocation});
      background-repeat: no-repeat;
      background-position: 12px center;
      background-size: 12px;
      width: 65%;
      & i {
        display: none;
      }
    }

  }
  @media (max-width: 600px) {
    & .form__control input {
      border-right: 0;
    }
    & .search__bar__description {
      width: 100%;
      padding-right: 25px;
      & button {
        display: flex;
        position: absolute;
        background-color: transparent;
        cursor: pointer;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        border: 0;
        & svg {
          transform: scale(0.9);
          &:hover path {
            fill: ${colors.second};
          }
        }
      }
    }
    & .search__bar--inner {
      display: flex;
      visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
      position: absolute;
      flex-direction: column;
      overflow: hidden;
      padding: 0;
      border-radius: 5px;
      top: ${(props) => (props.isOpen ? '57px' : '32px')};
      left: 0px;
      background-color: ${props => props.isThemeDark ? colors.blueDark : colors.white };
      width: 100%;
      transition: top 0.3s ease, visibility 0.15s ease;
      z-index: -5;
      box-shadow: 0px 15px 10px -5px #0000001c;

      & .search__bar__location {
        border-bottom: 1px solid ${props => props.isThemeDark ? colors.grayDark : colors.grayLight };
        background-position: 25px 55%;
        padding: 0 35px 0 20px;
        height: 56px;
        & i {
          display: block;
          position: absolute;
          top: 50%;
          right: 30px;
          transform: translateY(-50%);
          cursor: pointer;
          color: ${colors.second};
          font-size: 14px;
        }
      }
      & button {
        display: ${(props) => (props.isOpen ? 'block' : 'none')};
        width: 111px !important;
        margin: 0 auto;
      }
    }
    & .search__bar--inner > * {
      width: 100% !important;
    }
  }
`;

export interface StyledCheckboxProps {
  checked: boolean;    
}

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 0 10px;
  width: 35%;
  & small {
    cursor: pointer;
  }
  & span {
    cursor: pointer;
    display: flex; 
    background-color: ${props => props.checked ? colors.second : colors.grayLight};
    border-radius: 2px;
    height: 15px;
    width: 15px;
    margin-right: 15px;
    & img {
      display: ${props => props.checked ? 'flex' : 'none'};
      margin: auto;
      max-width: 80%;
      max-height: 80%;
    }    
  }
  @media (max-width: 600px) {    
      border-right: 0;
      padding: 25px 0;
      margin-left: 25px;
      height: 56px;
      & small > span {
        display: inline-block;
      }
  }

`

export {StyledSearchBar, StyledCheckbox};
