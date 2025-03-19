import { UITexts } from '@/constants';
import { addKanbanColumn, deleteKanbanColumn, editKanbanColumn } from '@/store/kanbanBoard/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch } from '@/store/store';
import { getRandomColor } from '@/utils/functions';
import { IColumn, IColumnWithoutCardIds } from '@/utils/interfaces';

import { useValidation } from './useValidation';

interface IUseColumnActions {
  handleAddColumn: (formData: IColumnWithoutCardIds) => void;
  handleDeleteColumn: (id: string) => void;
  handleEditColumn: (formData: IColumnWithoutCardIds, id: string) => void;
}

export const useColumnActions = (): IUseColumnActions => {
  const dispatch = useAppDispatch();
  const { isEmptyField, isDuplicateColumn } = useValidation();

  const handleAddColumn = (formData: IColumnWithoutCardIds) => {
    if (isEmptyField(formData.title) || isDuplicateColumn(formData.title)) {
      return;
    }

    const newColumn: IColumn = {
      ...formData,
      id: `column-${Date.now()}`,
      cardIds: [],
      color: formData.color || getRandomColor(),
    };

    dispatch(addKanbanColumn(newColumn));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_ADD_COLUMN }));
  };

  const handleDeleteColumn = (id: string) => {
    dispatch(deleteKanbanColumn(id));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_DELETE_COLUMN }));
  };

  const handleEditColumn = (formData: IColumnWithoutCardIds, id: string) => {
    if (isEmptyField(formData.title) || isDuplicateColumn(formData.title)) {
      return;
    }

    const updatedColumn: IColumn = {
      ...formData,
      id,
      cardIds: [],
    };

    dispatch(editKanbanColumn(updatedColumn));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_EDIT_COLUMN }));
  };

  return { handleAddColumn, handleDeleteColumn, handleEditColumn };
};
