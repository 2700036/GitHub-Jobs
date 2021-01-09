import styled, { css } from 'styled-components';
import colors from '../../constants/colors';


const StyledJobItem = styled.div`
  position: relative;
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 0 20px 20px;
  height: 225px;
  & .thumbnail__image__container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 70px;
    width: 70px;
    border-radius: 10px;
    transform: translateY(-50%);
    border: 1px solid var(--border);
    background-color: ${colors.white};
    & img {
      max-width: 100%;
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