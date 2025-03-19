import styled from 'styled-components';

import { getOpacityColor } from '@/utils/functions';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-m);
`;

const Title = styled.h3`
  font-size: var(--font-size-m);
  line-height: var(--font-height-m);
  font-weight: 700;
  color: var(--color-white);
`;

const TaskCount = styled.div<{ color: string }>`
  width: var(--width-m);
  height: var(--height-m);
  border-radius: var(--radius-full);
  background-color: var(--color-white);
  color: ${({ color }) => getOpacityColor(color, 50) || 'var(--color-sage)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-s);
  line-height: var(--font-height-m);
  font-weight: 600;
`;

export { TaskCount, Title, TitleWrapper };
