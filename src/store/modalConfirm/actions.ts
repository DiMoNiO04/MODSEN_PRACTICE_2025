import { IToggleModalConfirmPayload } from './types';

enum EModalConfirmActions {
  TOGGLE_MODAL = 'TOGGLE_MODAL_CONFIRM',
}

const toggleModalConfirm = (payload: IToggleModalConfirmPayload) => ({
  type: EModalConfirmActions.TOGGLE_MODAL,
  payload,
});

export { EModalConfirmActions, toggleModalConfirm };
