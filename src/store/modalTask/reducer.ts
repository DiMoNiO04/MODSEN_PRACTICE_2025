import { EModalTaskActions } from './actions';
import { IInitialModalTaskState, TModalTaskAction } from './types';

const initialModalTaskState: IInitialModalTaskState = {
  isOpen: false,
  cardData: null,
};

const modalTaskReducer = (state = initialModalTaskState, action: TModalTaskAction): IInitialModalTaskState => {
  switch (action.type) {
    case EModalTaskActions.OPEN_MODAL:
      return { ...state, isOpen: true, cardData: action.payload };
    case EModalTaskActions.CLOSE_MODAL:
      return { ...state, isOpen: false, cardData: null };
    default:
      return state;
  }
};

export { modalTaskReducer };
