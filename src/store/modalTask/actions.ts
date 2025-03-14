import { ICard } from '@/utils/interfaces';

import { EModalTaskActions, TModalTaskAction } from './types';

const openModalTask = (cardData: ICard): TModalTaskAction => ({
  type: EModalTaskActions.OPEN_MODAL,
  payload: cardData,
});

const closeModalTask = (): TModalTaskAction => ({
  type: EModalTaskActions.CLOSE_MODAL,
});

export { closeModalTask, EModalTaskActions, openModalTask };
