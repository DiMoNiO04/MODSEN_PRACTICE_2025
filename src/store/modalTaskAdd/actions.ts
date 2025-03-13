import { EModalTaskAddActions } from './types';
import { IToggleModalTaskAddPayload, TModalTaskAddAction } from './types';

const openModalTaskAdd = (payload?: IToggleModalTaskAddPayload): TModalTaskAddAction => ({
  type: EModalTaskAddActions.OPEN_MODAL,
  payload,
});

const closeModalTaskAdd = (): TModalTaskAddAction => ({
  type: EModalTaskAddActions.CLOSE_MODAL,
});

export { closeModalTaskAdd, EModalTaskAddActions, openModalTaskAdd };
