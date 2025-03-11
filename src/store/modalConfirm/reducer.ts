import { EModalConfirmActions } from './actions';
import { IInitialModalConfirmState, TModalConfirmAction } from './types';

const initialModalConfirmState: IInitialModalConfirmState = {
  isOpen: false,
};

const modalConfirmReducer = (
  state = initialModalConfirmState,
  action: TModalConfirmAction
): IInitialModalConfirmState => {
  switch (action.type) {
    case EModalConfirmActions.TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export { modalConfirmReducer };
