import styled, { css } from 'styled-components';
import colors from '../../constants/colors';

export interface StyledJobItemProps {
  logo: string;
}

const StyledJobItem = styled.div<StyledJobItemProps>`
  position: relative;
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 0 20px 20px;
  height: 225px;
  box-shadow: 0px 0px 13px 0px ${colors.boxShadow};
  & .thumbnail__image__container_bg {
    background: ${({logo}) => logo ? `url(${logo})` : colors.white};
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(40px);
  }
  & .thumbnail__image__container_box {
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    height: 100%;
    z-index: 2;
  }
  & .thumbnail__image__container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 70px;
    width: 70px;
    padding: 8px;
    border-radius: 10px;
    transform: translateY(-50%);
    border: 1px solid ${colors.grayLight};
    background-color: ${colors.white};
    & img {
      max-width: 100%;      
      object-fit: contain;
    };
    & .no-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.grayDark};
      width: 100%;
      height: 100%;
      font-size: 12px;
    };
  }
  & .thumbnail__time-type, .thumbnail__company {
    font-size: 0.85em;
  };
  & .thumbnail__title {
    margin: 15px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  };
  & .thumbnail__location {
    display: inline-block;
    position: absolute;
    bottom: 20px;
    color: ${colors.main};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export default StyledJobItem;