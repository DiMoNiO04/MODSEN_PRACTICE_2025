import styled from 'styled-components';

import { BREAKPOINTS } from '@/utils';

const ContainerBlock = styled.div`
  max-width: 100%;
  padding: 0 var(--padding-l);
  margin: var(--margin-auto);

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 0;
  }
`;

export { ContainerBlock };
