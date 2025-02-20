import styled from 'styled-components';
import { getOpacityColor } from '@/utils';

const Text = styled.div<{ color: string; isLevel?: boolean }>`
  border-radius: 32px;
  padding: 4px 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  width: fit-content;
  color: ${({ color }) => color};
  background: ${({ color }) => getOpacityColor(color, 10)};
`;

export { Text };
