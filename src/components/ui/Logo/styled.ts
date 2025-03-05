import styled from 'styled-components';

import { BREAKPOINTS } from '@/utils';

const LogoBlock = styled.h1`
  font-size: var(--font-size-xxl);
  line-height: var(--font-height-xxl);
  font-weight: 800;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

export { LogoBlock };
