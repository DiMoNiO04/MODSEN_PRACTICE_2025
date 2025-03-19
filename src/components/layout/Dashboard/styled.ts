import styled from 'styled-components';

import { BREAKPOINTS } from '@/utils/breakpoints';

const DashboardContainer = styled.div`
  padding: var(--padding-xxl);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-xl);

  @media @media (max-width: ${BREAKPOINTS.desc}) {
    grid-template-columns: repeat(3, 1fr);
    padding: var(--padding-xx);
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding: var(--padding-l);
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 0 var(--padding-xxl);
  }
`;

export { DashboardContainer };
