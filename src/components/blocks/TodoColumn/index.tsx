import { ICard, IOption } from '@/utils/interfaces';

import { TodoColumnContainer } from '../TodoColumnContainer';
import { TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnTaskAdd } from '../TodoColumnTaskAdd';
import { TodoList } from '../TodoList';

interface ITodoColumnProps {
  cardIds: string[];
  title: string;
  color: string;
  cards: Record<string, ICard>;
}

export const TodoColumn = ({ cardIds, color, title, cards }: ITodoColumnProps) => {
  const tasks = cardIds.map((id) => cards[id]);

  return (
    <TodoColumnContainer>
      <TodoColumnHeader title={title} color={color} count={cardIds.length} />
      <TodoList tasks={tasks} />
      <TodoColumnTaskAdd title={title} color={color} />
    </TodoColumnContainer>
  );
};
