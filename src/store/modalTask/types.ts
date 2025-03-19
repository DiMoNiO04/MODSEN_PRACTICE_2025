import { ITask } from '@/utils/interfaces';

enum EModalTaskActions {
  OPEN_MODAL = 'OPEN_MODAL_TASK',
  CLOSE_MODAL = 'CLOSE_MODAL_TASK',
}

interface IInitialModalTaskState {
  isOpen: boolean;
  taskData: ITask | null;
}

type TModalTaskAction =
  | { type: EModalTaskActions.OPEN_MODAL; payload: ITask }
  | { type: EModalTaskActions.CLOSE_MODAL };

export { EModalTaskActions };
export type { IInitialModalTaskState, TModalTaskAction };
