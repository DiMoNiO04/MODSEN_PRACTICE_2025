import { EColors, UITexts } from '@/constants';
import { IColumn } from '@/utils/interfaces';

import { TodoColumnContainer } from '../TodoColumnContainer';
import { TodoColumnHeader } from '../TodoColumnHeader';

export const AddNewColumn = () => {
  const initialData: IColumn = {
    id: `column-${Date.now()}`,
    title: UITexts.COLUMN.ADD_NEW,
    color: EColors.GRAY,
    cardIds: [],
  };

  return (
    <TodoColumnContainer isFullHeight={false}>
      <TodoColumnHeader {...initialData} isAddNewColumn />
    </TodoColumnContainer>
  );
};
