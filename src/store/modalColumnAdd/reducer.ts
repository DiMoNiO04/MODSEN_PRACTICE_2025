import { EModalColumnAddActions } from './actions';
import { IInitialModalColumnAddState, TModalColumnAddAction } from './types';

const initialModalColumnAddState: IInitialModalColumnAddState = {
  isOpen: false,
};

const modalColumnAddReducer = (
  state = initialModalColumnAddState,
  action: TModalColumnAddAction
): IInitialModalColumnAddState => {
  switch (action.type) {
    case EModalColumnAddActions.OPEN_MODAL:
      return { ...state, isOpen: true };
    case EModalColumnAddActions.CLOSE_MODAL:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export { modalColumnAddReducer };
