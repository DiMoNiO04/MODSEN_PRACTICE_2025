import styled from 'styled-components';

import { BREAKPOINTS } from '@/utils';

const Button = styled.button`
  position: fixed;
  z-index: var(--index-xl);
  left: var(--right-xl);
  bottom: var(--top-xl);
  width: var(--width-l);
  height: var(--height-l);

  @media (max-width: ${BREAKPOINTS.mobile}) {
    left: auto;
    bottom: auto;
    top: 16px;
    right: 16px;
    width: var(--width-m);
    height: var(--height-m);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export { Button, Img };
