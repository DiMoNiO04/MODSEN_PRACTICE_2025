import { ICardProps } from '@/components/ui';

import { EModalTaskActions, TModalTaskAction } from './types';

const openModalTask = (cardData: ICardProps): TModalTaskAction => ({
  type: EModalTaskActions.OPEN_MODAL,
  payload: cardData,
});

const closeModalTask = (): TModalTaskAction => ({
  type: EModalTaskActions.CLOSE_MODAL,
});

export { closeModalTask, EModalTaskActions, openModalTask };
