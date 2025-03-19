import { UITexts } from '@/constants';
import { addKanbanColumn, deleteKanbanColumn, editKanbanColumn } from '@/store/kanbanBoard/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch } from '@/store/store';
import { getRandomColor } from '@/utils/functions';
import { IColumn, IColumnWithoutTaskIds } from '@/utils/interfaces';

import { useValidation } from './useValidation';

interface IUseColumnActions {
  handleAddColumn: (formData: IColumnWithoutTaskIds) => void;
  handleDeleteColumn: (id: string) => void;
  handleEditColumn: (formData: IColumnWithoutTaskIds, id: string) => void;
}

export const useColumnActions = (): IUseColumnActions => {
  const dispatch = useAppDispatch();
  const { isEmptyField, isDuplicateColumn } = useValidation();

  const handleAddColumn = (formData: IColumnWithoutTaskIds) => {
    if (isEmptyField(formData.title) || isDuplicateColumn(formData.title)) {
      return;
    }

    const newColumn: IColumn = {
      ...formData,
      id: `column-${Date.now()}`,
      taskIds: [],
      color: formData.color || getRandomColor(),
    };

    dispatch(addKanbanColumn(newColumn));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_ADD_COLUMN }));
  };

  const handleDeleteColumn = (id: string) => {
    dispatch(deleteKanbanColumn(id));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_DELETE_COLUMN }));
  };

  const handleEditColumn = (formData: IColumnWithoutTaskIds, id: string) => {
    if (isEmptyField(formData.title) || isDuplicateColumn(formData.title)) {
      return;
    }

    const updatedColumn: IColumn = {
      ...formData,
      id,
      taskIds: [],
    };

    dispatch(editKanbanColumn(updatedColumn));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_EDIT_COLUMN }));
  };

  return { handleAddColumn, handleDeleteColumn, handleEditColumn };
};
