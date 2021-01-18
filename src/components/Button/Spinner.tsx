import React from 'react';
import { StyledSpiner, StyledSpinerProps } from './styled';

export default function Spinner(props: StyledSpinerProps) {
  return (
    <StyledSpiner {...props}>
      <svg viewBox='0 0 10 10'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.01733 4.15986C1.43145 4.16895 1.75978 4.51202 1.75069 4.92613C1.72976 5.87963 2.12538 6.83046 2.91094 7.48962C4.28593 8.64338 6.33589 8.46403 7.48964 7.08904C8.6434 5.71404 8.46405 3.66409 7.08906 2.51033C6.3035 1.85117 5.29842 1.62667 4.36304 1.81286C3.9568 1.89372 3.56192 1.62995 3.48106 1.2237C3.4002 0.817459 3.66397 0.422581 4.07022 0.341719C5.43257 0.0705453 6.90448 0.39734 8.05324 1.36127C10.0628 3.04752 10.325 6.04361 8.63871 8.05322C6.95245 10.0628 3.95636 10.3249 1.94676 8.63869C0.797996 7.67476 0.220572 6.28196 0.251056 4.89322C0.260146 4.4791 0.60322 4.15077 1.01733 4.15986Z'
        />
      </svg>
    </StyledSpiner>
  );
}
