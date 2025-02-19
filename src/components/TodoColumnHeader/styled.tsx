import styled from 'styled-components';
import { getOpacityColor } from '@/utils';
import { BtnAddIcon } from '../ui';

const Container = styled.div<{ color: string }>`
  border-radius: 32px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ color }) => color || '#C8CDC2'};
`;

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

export interface ITodoColumnHeaderProps {
  color: string;
  title: string;
  count: number;
  handle: () => void;
}

export const TodoColumnHeader = ({ color, count, title, handle }: ITodoColumnHeaderProps) => {
  return (
    <Container color={color}>
      <TitleWrapper>
        <TaskCount color={color}>{count}</TaskCount>
        <Title>{title}</Title>
      </TitleWrapper>
      <BtnAddIcon color="#FFFFFF" handle={handle} />
    </Container>
  );
};
