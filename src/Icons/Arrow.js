import React from "react";
import styled, { css } from "styled-components";
import colors from "../constants/colors";

export const SArrow = styled.div`
    display: flex;            
    height: 75%;
  svg {      
    height: 100%; 
    margin-left: 10px;
  }  
  
`;

export default function Arrow(props) {

  return (
    <SArrow {...props} >
      <svg viewBox="0 0 12 12" className="icon">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L6.53033 11.5303C6.23744 11.8232 5.76256 11.8232 5.46967 11.5303C5.17678 11.2374 5.17678 10.7626 5.46967 10.4697L9.18934 6.75H1C0.585787 6.75 0.25 6.41421 0.25 6C0.25 5.58579 0.585787 5.25 1 5.25H9.18934L5.46967 1.53033C5.17678 1.23744 5.17678 0.762563 5.46967 0.46967C5.76256 0.176777 6.23744 0.176777 6.53033 0.46967L11.5303 5.46967Z"
        />
      </svg>
    </SArrow>
  );
}

// ${props =>
//   !props.isLoading &&
//   css`
//   & .icon {
//     fill: transparent;
//   }
//   `}
// ${props =>
//   props.size === "s" &&
//   css`
//     height: 11px;
//   `}

//   ${props =>
//     props.variant === "ghost" &&
//     css`
//       svg {
//         fill: ${colors.black30};
//       }
//     `}