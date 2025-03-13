import { ICardProps } from '@/components/ui';

enum EModalTaskActions {
  OPEN_MODAL = 'OPEN_MODAL_TASK',
  CLOSE_MODAL = 'CLOSE_MODAL_TASK',
}

interface IInitialModalTaskState {
  isOpen: boolean;
  cardData: ICardProps | null;
}

type TModalTaskAction =
  | { type: EModalTaskActions.OPEN_MODAL; payload: ICardProps }
  | { type: EModalTaskActions.CLOSE_MODAL };

export { EModalTaskActions };
export type { IInitialModalTaskState, TModalTaskAction };
