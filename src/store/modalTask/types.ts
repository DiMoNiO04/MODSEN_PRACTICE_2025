import { ICard } from '@/utils/interfaces';

enum EModalTaskActions {
  OPEN_MODAL = 'OPEN_MODAL_TASK',
  CLOSE_MODAL = 'CLOSE_MODAL_TASK',
}

interface IInitialModalTaskState {
  isOpen: boolean;
  cardData: ICard | null;
}

type TModalTaskAction =
  | { type: EModalTaskActions.OPEN_MODAL; payload: ICard }
  | { type: EModalTaskActions.CLOSE_MODAL };

export { EModalTaskActions };
export type { IInitialModalTaskState, TModalTaskAction };
