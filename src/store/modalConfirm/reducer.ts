import { EModalConfirmActions } from './actions';
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
    case EModalConfirmActions.TOGGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
        text: action.payload.text,
        onConfirm: action.payload.onConfirm || undefined,
      };
    default:
      return state;
  }
};

export { modalConfirmReducer };
