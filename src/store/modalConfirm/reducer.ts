import { EModalConfirmActions } from './types';
import { IInitialModalConfirmState, TModalConfirmAction } from './types';

const initialModalConfirmState: IInitialModalConfirmState = {
  isOpen: false,
  text: null,
  onConfirm: undefined,
};

const modalConfirmReducer = (
  state = initialModalConfirmState,
  action: TModalConfirmAction
): IInitialModalConfirmState => {
  switch (action.type) {
    case EModalConfirmActions.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        text: action.payload.text,
        onConfirm: action.payload.onConfirm,
      };
    case EModalConfirmActions.CLOSE_MODAL:
      return {
        ...initialModalConfirmState,
      };
    default:
      return state;
  }
};

export { modalConfirmReducer };
