import styled from 'styled-components';
import colors from '../../constants/colors';
import footer from '../../images/desktop/bg-pattern-detail-footer.svg';

export interface StyledJobDetailsProps {
  
  isThemeDark: boolean;
}

export const StyledJobDetails = styled.div<StyledJobDetailsProps>`
  margin: 0 calc(9vw + 100px);  
  color: ${props => props.isThemeDark ? colors.white : colors.black};
  & p, li {
    color: ${props => props.isThemeDark ? colors.gray : colors.grayDark };
  }
  & strong {
    color: ${props => props.isThemeDark ? colors.white : colors.black };
  }
  & .job__listing__header {
    display: flex;
    min-height: 120px;
    padding: 20px 35px;
    border-radius: 5px;
    transform: translateY(-30px);
    background-color: ${props => props.isThemeDark ? colors.blueDark : colors.white };
    overflow: hidden;
    box-shadow: 0px 4px 13px 0px ${colors.boxShadow};
    @media (max-width: 720px) {
      flex-direction: column;
      text-align: center;
      overflow: visible;
      & .header__textbox {
        flex-direction: column;
        padding: 0px !important;
      }
      & .header__textbox__company-redirect {
        margin: 15px 0 0 0 !important;
      }
      & .header__image__container {
        margin: -55px auto 20px;
        border-radius: 5px;
        overflow: hidden;
        height: 80px;
        width: 90px !important;
        padding: 10px;
        background-color: ${colors.white};
      }
    }
    & .header__image__container {
      display: flex;
      align-items: center;
      width: 150px;
      & img {
        max-width: 100%;
      }
    }
    & .header__textbox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      padding: 0 0 0 50px;      
    }
    & .header__textbox__heading {
      margin-bottom: 8px;
    }
    & .header__textbox__company-redirect {
      text-align: center;
      margin-left: 50px;
      white-space: nowrap;
      & small {
        display: none;
        color: rgba(255, 0, 0, 0.75);
        margin-top: 5px;
      }
      &.invalid a {
        border: 1px solid rgba(255, 0, 0, 0.4);
        background-color: rgba(255, 0, 0, 0.1);
        color: rgba(255, 0, 0, 0.6);
        pointer-events: none;
      }
    }
  }

  & .job__listing__body {
    background-color: ${props => props.isThemeDark ? colors.blueDark : colors.white };
    padding: 35px;
    word-wrap: break-word;
    border-radius: 5px;
    box-shadow: 0px 4px 13px 0px ${colors.boxShadow};
    @media (max-width: 600px) {

      & .body__heading {
        flex-direction: column;
        align-items: flex-start;
        & button {          
          margin-top: 30px;
          align-self: flex-end;
        }
      }
      & .body__main ul li,
      .body ol li {
        margin: 0 15px 10px calc(15px + 1em);
      }
    }
    & .body__heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      
    }
    & .body__heading__title {
      margin: 8px 50px 8px 0px;
    }
    & .body__heading__location {
      color: ${colors.main};
    }
    & .body__main {
      line-height: 1.4;
      & h1,
      h2,
      h3 {
        margin: 20px 0 5px;
      }
      & p > strong {
        display: inline-flex;
        margin-top: 30px;
      }
      & ul,
      ol {
        margin: 15px 0;
        list-style: none;
        & li {
          position: relative;
          margin: 0 50px 10px calc(50px + 1em);
          &:before {
            content: '•';
            font-size: 12px;
            color: ${props => props.isThemeDark ? colors.gray : colors.grayDark };
            margin-right: 10px;
            margin-left: -1em;
          }
        }
      }
      & ul li:last-of-type,
      ol li:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  & .job__listing__cta {
    box-shadow: 0px 4px 13px 0px #738fffcf;
    z-index: 1;
    & .cta__body {
      & p {color: ${colors.white};}
    }
    position: relative;
    overflow-wrap: break-word;
    color: ${colors.white} !important;
    margin: 20px 0 60px;
    padding: 35px;
    border-radius: 8px;
    &::before {
      content: '';
      position: absolute;
      background-image: url(${footer});
      background-repeat: no-repeat;
      background-size: cover;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: -1;
      border-radius: 8px;
    }
    & .cta__body ul {
      margin: 20px 0 20px 20px;
    }
    & ul li {
      margin-bottom: 8px;
    }
    & ul li:last-of-type {
      margin-bottom: 0;
    }
    & h1,
    h2,
    h3,
    h4,
    p > strong,
    a {
      color: ${colors.white};
    }
  }

  & .job__listing__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 35px 20px;
    background-color: ${props => props.isThemeDark ? colors.blueDark : colors.white };
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 4px 13px 0px ${colors.boxShadow};
    @media (max-width: 600px) {     
        display: none;     
    }
    & .footer__textbox__position {
      margin-bottom: 10px;
    }
    & .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
  }

  @media (max-width: 1050px) {
    margin: 0 4vw;
  }
`;
