import { UITexts } from '@/constants';
import { EPriorityName } from '@/constants/taskPriority';
import { addKanbanTask, deleteKanbanTask, editKanbanTask, editKanbanTaskPriority } from '@/store/kanbanBoard/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch } from '@/store/store';
import { ITask } from '@/utils/interfaces';

import { useValidation } from './useValidation';

interface IUseTaskActions {
  handleAddTask: (formData: ITask) => void;
  handleDeleteTask: (id: string) => void;
  handleEditTask: (formData: ITask) => void;
  handleEditPriority: (taskId: string, priorityId: EPriorityName) => void;
}

export const useTaskActions = (): IUseTaskActions => {
  const dispatch = useAppDispatch();
  const { isEmptyField } = useValidation();

  const handleAddTask = (formData: ITask) => {
    if (isEmptyField(formData.title)) {
      return;
    }

    const newTask: ITask = {
      ...formData,
      id: `task-${Date.now()}`,
    };

    dispatch(addKanbanTask(newTask));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_ADD_TASK }));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteKanbanTask(id));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_DELETE_TASK }));
  };

  const handleEditTask = (formData: ITask) => {
    if (isEmptyField(formData.title)) {
      return;
    }

    const updatedTask: ITask = { ...formData };

    dispatch(editKanbanTask(updatedTask));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_EDIT_TASK }));
  };

  const handleEditPriority = (taskId: string, priorityId: EPriorityName) => {
    dispatch(editKanbanTaskPriority({ taskId, priorityId }));
    dispatch(openNotification({ isSuccess: true, text: UITexts.NOTIFICATION.SUCCESS_EDIT_PRIORITY }));
  };

  return { handleAddTask, handleDeleteTask, handleEditTask, handleEditPriority };
};
