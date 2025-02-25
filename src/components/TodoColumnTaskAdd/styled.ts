import styled from 'styled-components';

import { getOpacityColor } from '@/utils';

const Button = styled.button<{ color: string }>`
  background: #ffffff;
  padding: 12px;
  border-radius: 32px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 2px 4px -2px #1717170f;
  cursor: pointer;
  transition: background 0.2s ease;

  @media (any-hover: hover) {
    &:hover {
      background: ${({ color }) => getOpacityColor(color, 10)};
    }
  }
`;

export { Button };
