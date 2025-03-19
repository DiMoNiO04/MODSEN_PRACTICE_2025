import { Priority } from '@/components/blocks';
import { BtnRound, TextDef, TextH3 } from '@/components/ui';
import { useDragAndDropTask } from '@/hooks';
import { openModalTask } from '@/store/modalTask/actions';
import { useAppDispatch } from '@/store/store';
import { ITask } from '@/utils/interfaces';

import { Block, TopBlockInfo } from './styled';

export const Task = (taskData: ITask) => {
  const { id, title, desc, priority, columnId } = taskData;

  const dispatch = useAppDispatch();

  const { isDragOver, handleDragStart, handleDragOver, handleDragLeave, handleDrop } = useDragAndDropTask({
    taskId: id,
    columnId,
  });

  const handleOpenModal = () => dispatch(openModalTask(taskData));

  return (
    <Block
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      $isDragOver={isDragOver}
    >
      <TopBlockInfo>
        <Priority priorityId={priority} taskData={taskData} />
        <BtnRound type="maximize" handle={handleOpenModal} />
      </TopBlockInfo>
      <TextH3 text={title} />
      {desc && <TextDef text={desc} maxLines={3} />}
    </Block>
  );
};
