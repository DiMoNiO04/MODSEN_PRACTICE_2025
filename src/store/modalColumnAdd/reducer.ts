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
    case EModalColumnAddActions.TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export { modalColumnAddReducer };
