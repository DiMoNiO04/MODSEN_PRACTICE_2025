import { UITexts } from '@/constants';
import { addKanbanColumn, deleteKanbanColumn, editKanbanColumn } from '@/store/kanbanBoard/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch } from '@/store/store';
import { getRandomColor } from '@/utils/functions';
import { IColumn, IColumnWithoutTaskIds } from '@/utils/interfaces';

import { useValidation } from './useValidation';

interface IUseColumnActions {
  handleAddColumn: (formData: IColumnWithoutTaskIds, onClose: () => void) => void;
  handleDeleteColumn: (id: string) => void;
  handleEditColumn: (formData: IColumn, onClose: () => void) => void;
}

export const useColumnActions = (): IUseColumnActions => {
  const dispatch = useAppDispatch();
  const { isEmptyField, isDuplicateColumn } = useValidation();

  const handleAddColumn = (formData: IColumnWithoutTaskIds, onClose: () => void) => {
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

    onClose();
  };

  const handleDeleteColumn = (id: string) => {
    dispatch(deleteKanbanColumn(id));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_DELETE_COLUMN }));
  };

  const handleEditColumn = (formData: IColumn, onClose: () => void) => {
    if (isEmptyField(formData.title) || isDuplicateColumn(formData.title, formData.id)) {
      return;
    }

    const updatedColumn: IColumn = { ...formData };

    dispatch(editKanbanColumn(updatedColumn));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_EDIT_COLUMN }));

    onClose();
  };

  return { handleAddColumn, handleDeleteColumn, handleEditColumn };
};
