import { EModalConfirmActions } from './types';
import { IOpenModalConfirmPayload, TModalConfirmAction } from './types';

const openModalConfirm = (payload: IOpenModalConfirmPayload): TModalConfirmAction => ({
  type: EModalConfirmActions.OPEN_MODAL,
  payload,
});

const closeModalConfirm = (): TModalConfirmAction => ({
  type: EModalConfirmActions.CLOSE_MODAL,
});

export { closeModalConfirm, EModalConfirmActions, openModalConfirm };
