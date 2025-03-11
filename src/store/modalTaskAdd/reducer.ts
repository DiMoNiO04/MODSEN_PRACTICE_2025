import { EModalTaskAddActions } from './actions';
import { IInitialModalTaskAddState, TModalTaskAddAction } from './types';

const initialModalTaskAddState: IInitialModalTaskAddState = {
  isOpen: false,
  isFromHeader: false,
  status: null,
};

const modalTaskAddReducer = (
  state = initialModalTaskAddState,
  action: TModalTaskAddAction
): IInitialModalTaskAddState => {
  switch (action.type) {
    case EModalTaskAddActions.TOGGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
        isFromHeader: action.payload.isFromHeader ?? false,
        status: action.payload.status ?? null,
      };
    default:
      return state;
  }
};

export { modalTaskAddReducer };
