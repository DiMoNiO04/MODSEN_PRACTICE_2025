import { EColors, UITexts } from '@/constants';
import { IColumn } from '@/utils/interfaces';

import { TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnContainerBlock } from './styled';

export const AddNewColumn = () => {
  const initialData: IColumn = {
    id: `column-${Date.now()}`,
    title: UITexts.COLUMN.ADD_NEW,
    color: EColors.GRAY,
    taskIds: [],
  };

  return (
    <TodoColumnContainerBlock>
      <TodoColumnHeader {...initialData} columnId={initialData.id} isAddNewColumn />
    </TodoColumnContainerBlock>
  );
};
