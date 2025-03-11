import { EModalConfirmActions } from './actions';

interface IInitialModalConfirmState {
  isOpen: boolean;
}

type TModalConfirmAction = { type: EModalConfirmActions.TOGGLE_MODAL };

export type { IInitialModalConfirmState, TModalConfirmAction };
