import { CARD_STATUS } from '@/constants';

import { EModalTaskAddActions } from './types';
import { IInitialModalTaskAddState, TModalTaskAddAction } from './types';

const initialModalTaskAddState: IInitialModalTaskAddState = {
  isOpen: false,
  isFromHeader: false,
  status: CARD_STATUS.toDo,
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
        isFromHeader: action.payload?.isFromHeader ?? false,
        status: action.payload?.status ?? undefined,
      };
    case EModalTaskAddActions.CLOSE_MODAL:
      return { ...initialModalTaskAddState };
    default:
      return state;
  }
};

export { modalTaskAddReducer };
