import styled from 'styled-components';

import { BREAKPOINTS } from '@/utils';

const BurgerButton = styled.button`
  flex-direction: column;
  row-gap: 4px;
  justify-content: center;
  align-items: center;
  width: var(--width-l);
  height: var(--height-l);
  background: transparent;
  border: none;
  position: relative;
  padding: var(--padding-s);
  display: none;

  &.active {
    div:nth-child(1) {
      transform: translateY(6px) rotate(45deg);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: translateY(-6px) rotate(-45deg);
    }
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: flex;
  }
`;

const BurgerButtonLine = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: var(--color-dark);
  transition: all 0.3s ease;
`;

export { BurgerButton, BurgerButtonLine };
