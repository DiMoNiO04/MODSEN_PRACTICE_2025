import { EColumnsName } from '@/constants/kanbanData';

import { EModalTaskAddActions } from './types';
import { IInitialModalTaskAddState, TModalTaskAddAction } from './types';

const initialModalTaskAddState: IInitialModalTaskAddState = {
  isOpen: false,
  isFromHeader: false,
  columnId: EColumnsName.TODO,
};

const modalTaskAddReducer = (
  state = initialModalTaskAddState,
  action: TModalTaskAddAction
): IInitialModalTaskAddState => {
  switch (action.type) {
    case EModalTaskAddActions.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        isFromHeader: action.payload.isFromHeader ?? false,
        columnId: action.payload.columnId,
      };
    case EModalTaskAddActions.CLOSE_MODAL:
      return { ...initialModalTaskAddState };
    default:
      return state;
  }
};

export { modalTaskAddReducer };
