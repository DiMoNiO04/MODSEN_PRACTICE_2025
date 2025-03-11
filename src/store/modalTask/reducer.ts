import { EModalTaskActions } from './actions';
import { IInitialModalTaskState, TModalTaskAction } from './types';

const initialModalTaskState: IInitialModalTaskState = {
  isOpen: false,
  cardData: null,
};

const modalTaskReducer = (state = initialModalTaskState, action: TModalTaskAction): IInitialModalTaskState => {
  switch (action.type) {
    case EModalTaskActions.TOGGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
        cardData: action.payload,
      };
    default:
      return state;
  }
};

export { modalTaskReducer };
