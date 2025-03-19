import styled from 'styled-components';

import { BREAKPOINTS } from '@/utils/breakpoints';

const Button = styled.button`
  position: fixed;
  z-index: var(--index-xl);
  left: var(--right-l);
  bottom: var(--top-l);
  width: var(--width-m);
  height: var(--height-m);

  @media (max-width: ${BREAKPOINTS.mobile}) {
    left: auto;
    bottom: auto;
    top: 16px;
    right: 16px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export { Button, Img };
