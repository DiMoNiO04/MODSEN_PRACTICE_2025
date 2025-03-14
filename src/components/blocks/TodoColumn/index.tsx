import { ICard, IOption } from '@/utils/interfaces';

import { TodoColumnContainer } from '../TodoColumnContainer';
import { TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnTaskAdd } from '../TodoColumnTaskAdd';
import { TodoList } from '../TodoList';

interface ITodoColumnProps {
  cardIds: string[];
  status: IOption;
  cards: Record<string, ICard>;
}

export const TodoColumn = ({ cardIds, status, cards }: ITodoColumnProps) => {
  const tasks = cardIds.map((id) => cards[id]);

  return (
    <TodoColumnContainer>
      <TodoColumnHeader status={status} count={cardIds.length} />
      <TodoList tasks={tasks} />
      <TodoColumnTaskAdd status={status} />
    </TodoColumnContainer>
  );
};
