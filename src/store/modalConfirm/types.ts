import { EModalConfirmActions } from './actions';

interface IInitialModalConfirmState extends IToggleModalConfirmPayload {
  isOpen: boolean;
}

interface IToggleModalConfirmPayload {
  text: string | null;
  onConfirm?: () => void;
}

type TModalConfirmAction = {
  type: EModalConfirmActions.TOGGLE_MODAL;
  payload: {
    text: string | null;
    onConfirm?: (() => void) | null;
  };
};

export type { IInitialModalConfirmState, IToggleModalConfirmPayload, TModalConfirmAction };
