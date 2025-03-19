import { ITask } from '@/utils/interfaces';

import { EModalTaskActions, TModalTaskAction } from './types';

const openModalTask = (taskData: ITask): TModalTaskAction => ({
  type: EModalTaskActions.OPEN_MODAL,
  payload: taskData,
});

const closeModalTask = (): TModalTaskAction => ({
  type: EModalTaskActions.CLOSE_MODAL,
});

export { closeModalTask, EModalTaskActions, openModalTask };
