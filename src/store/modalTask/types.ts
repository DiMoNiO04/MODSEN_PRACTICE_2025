import { ICardProps } from '@/components/ui';

import { EModalTaskActions } from './actions';

interface IInitialModalTaskState {
  isOpen: boolean;
  cardData: ICardProps | null;
}

type TModalTaskAction = {
  type: EModalTaskActions.TOGGLE_MODAL;
  payload: ICardProps | null;
};

export type { IInitialModalTaskState, TModalTaskAction };
