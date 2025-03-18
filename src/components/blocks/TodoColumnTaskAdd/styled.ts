import styled from 'styled-components';

import { getOpacityColor } from '@/utils/functions';

const Button = styled.button<{ color: string }>`
  background: var(--color-white);
  padding: var(--padding-m);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-gray-cool);
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: background 0.2s ease;

  @media (any-hover: hover) {
    &:hover {
      background: ${({ color }) => getOpacityColor(color, 10)};
    }
  }
`;

export { Button };
