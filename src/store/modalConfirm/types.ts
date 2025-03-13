enum EModalConfirmActions {
  OPEN_MODAL = 'OPEN_MODAL_CONFIRM',
  CLOSE_MODAL = 'CLOSE_MODAL_CONFIRM',
}

interface IOpenModalConfirmPayload {
  text: string | null;
  onConfirm?: () => void;
}

interface IInitialModalConfirmState extends IOpenModalConfirmPayload {
  isOpen: boolean;
}

type TModalConfirmAction =
  | { type: EModalConfirmActions.OPEN_MODAL; payload: IOpenModalConfirmPayload }
  | { type: EModalConfirmActions.CLOSE_MODAL };

export { EModalConfirmActions };
export type { IInitialModalConfirmState, IOpenModalConfirmPayload, TModalConfirmAction };
