import { TaskCount, Title, TitleWrapper } from './styled';

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
