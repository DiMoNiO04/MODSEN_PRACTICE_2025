import { EModalTaskAddActions } from './actions';
import { IInitialModalTaskAddState, TModalTaskAddAction } from './types';

const initialModalTaskAddState: IInitialModalTaskAddState = {
  isOpen: false,
  isFromHeader: false,
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
        isFromHeader: action.payload,
      };
    default:
      return state;
  }
};

export { modalTaskAddReducer };
