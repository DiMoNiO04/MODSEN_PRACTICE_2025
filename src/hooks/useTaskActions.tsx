import { UITexts } from '@/constants';
import { EPriorityName } from '@/constants/cardPriority';
import { addKanbanTask, deleteKanbanTask, editKanbanTask, editKanbanTaskPriority } from '@/store/kanbanBoard/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch } from '@/store/store';
import { ICard, ICardWithoutColumnId } from '@/utils/interfaces';

import { useValidation } from './useValidation';

interface IUseTaskActions {
  handleAddTask: (formData: ICardWithoutColumnId) => void;
  handleDeleteTask: (id: string) => void;
  handleEditTask: (formData: ICard) => void;
  handleEditPriority: (taskId: string, priorityId: EPriorityName) => void;
}

export const useTaskActions = (): IUseTaskActions => {
  const dispatch = useAppDispatch();
  const { isEmptyField } = useValidation();

  const handleAddTask = (formData: ICardWithoutColumnId) => {
    if (isEmptyField(formData.title)) {
      return;
    }

    const newTask: ICard = {
      ...formData,
      id: `card-${Date.now()}`,
    };

    dispatch(addKanbanTask(newTask));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_ADD_CARD }));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteKanbanTask(id));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_DELETE_CARD }));
  };

  const handleEditTask = (formData: ICard) => {
    if (isEmptyField(formData.title)) {
      return;
    }

    const updatedTask: ICard = { ...formData };

    dispatch(editKanbanTask(updatedTask));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_EDIT_CARD }));
  };

  const handleEditPriority = (taskId: string, priorityId: EPriorityName) => {
    dispatch(editKanbanTaskPriority({ taskId, priorityId }));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_EDIT_PRIORITY }));
  };

  return { handleAddTask, handleDeleteTask, handleEditTask, handleEditPriority };
};
