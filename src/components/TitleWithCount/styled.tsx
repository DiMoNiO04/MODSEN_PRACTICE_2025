import { getOpacityColor } from '@/utils';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: #fff;
`;

const TaskCount = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  color: ${({ color }) => getOpacityColor(color, 50) || '#C8CDC2'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
`;

export interface ITitleWithCountProps {
  color: string;
  title: string;
  count: number;
}

export const TitleWithCount = ({ count, title, color }: ITitleWithCountProps) => {
  return (
    <TitleWrapper>
      <TaskCount color={color}>{count}</TaskCount>
      <Title>{title}</Title>
    </TitleWrapper>
  );
};
