import styled from 'styled-components';

import { BREAKPOINTS } from '@/utils/breakpoints';

const HeaderBtnAddBlock = styled.div`
  position: relative;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

export { HeaderBtnAddBlock };
