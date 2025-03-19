import { useDragAndDropColumn } from '@/hooks';
import { useAppSelector } from '@/store/store';
import { IColumn, ITask } from '@/utils/interfaces';

import { TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnTaskAdd } from '../TodoColumnTaskAdd';
import { TodoList } from '../TodoList';
import { TodoColumnContainerBlock } from './styled';

export const TodoColumn = ({ id, taskIds, color, title }: IColumn) => {
  const { kanbanData } = useAppSelector((state) => state.kanbanBoard);
  const tasks: ITask[] = taskIds.map((id) => kanbanData.tasks[id]);

  const { isDragOver, handleDragStart, handleDragOver, handleDragLeave, handleDrop } = useDragAndDropColumn({
    id,
    taskIds,
  });

  return (
    <TodoColumnContainerBlock
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      $isDragOver={isDragOver}
    >
      <TodoColumnHeader id={id} title={title} color={color} taskIds={taskIds} columnId={id} />
      <TodoList tasks={tasks} />
      <TodoColumnTaskAdd columnId={id} title={title} color={color} />
    </TodoColumnContainerBlock>
  );
};
