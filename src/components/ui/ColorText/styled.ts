import styled from 'styled-components';

import { getOpacityColor } from '@/utils/functions';

const Text = styled.div<{ color: string; $isFullWidth?: boolean }>`
  border-radius: var(--radius-xl);
  padding: var(--padding-xs) var(--padding-s);
  font-size: var(--font-size-xs);
  line-height: var(--font-height-s);
  font-weight: 600;
  width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'fit-content')};
  color: ${({ color }) => color};
  background: ${({ color }) => getOpacityColor(color, 10)};
`;

export { Text };
