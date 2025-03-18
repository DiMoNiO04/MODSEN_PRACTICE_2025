import styled from 'styled-components';

import { BREAKPOINTS } from '@/utils/breakpoints';

const MainBlock = styled.main`
  margin-top: var(--margin-xxl);

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin-top: var(--margin-xl);
  }
`;

export { MainBlock };
