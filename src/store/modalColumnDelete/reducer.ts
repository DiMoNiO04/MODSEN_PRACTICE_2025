import { EModalColumnDeleteActions } from './types';
import { IInitialModalColumnDeleteState, TModalColumnDeleteAction } from './types';

const initialModalColumnDeleteState: IInitialModalColumnDeleteState = {
  isOpen: false,
  id: '',
};

const modalColumnDeleteReducer = (
  state = initialModalColumnDeleteState,
  action: TModalColumnDeleteAction
): IInitialModalColumnDeleteState => {
  switch (action.type) {
    case EModalColumnDeleteActions.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        id: action.payload.id,
      };
    case EModalColumnDeleteActions.CLOSE_MODAL:
      return {
        ...initialModalColumnDeleteState,
      };
    default:
      return state;
  }
};

export { modalColumnDeleteReducer };
