import { EModalColumnEditActions } from './actions';
import { IInitialModalColumnEditState, TModalColumnEditAction } from './types';

const initialModalColumnAddState: IInitialModalColumnEditState = {
  isOpen: false,
};

const modalColumnEditReducer = (
  state = initialModalColumnAddState,
  action: TModalColumnEditAction
): IInitialModalColumnEditState => {
  switch (action.type) {
    case EModalColumnEditActions.TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export { modalColumnEditReducer };
