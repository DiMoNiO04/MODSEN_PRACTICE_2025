import styled from 'styled-components';

import { getOpacityColor } from '@/utils';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: #ffffff;
`;

const TaskCount = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ffffff;
  color: ${({ color }) => getOpacityColor(color, 50) || '#C8CDC2'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
`;

export { TaskCount, Title, TitleWrapper };
