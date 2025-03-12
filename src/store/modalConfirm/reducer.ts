import { EModalConfirmActions } from './actions';
import { IInitialModalConfirmState, TModalConfirmAction } from './types';

const initialModalConfirmState: IInitialModalConfirmState = {
  isOpen: false,
  text: null,
  onConfirm: null,
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
        onConfirm: action.payload.onConfirm || null,
      };
    default:
      return state;
  }
};

export { modalConfirmReducer };
