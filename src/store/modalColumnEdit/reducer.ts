import { EModalColumnEditActions } from './actions';
import { IInitialModalColumnEditState, TModalColumnEditAction } from './types';

const initialModalColumnAddState: IInitialModalColumnEditState = {
  isOpen: false,
  name: '',
  color: undefined,
};

const modalColumnEditReducer = (
  state = initialModalColumnAddState,
  action: TModalColumnEditAction
): IInitialModalColumnEditState => {
  switch (action.type) {
    case EModalColumnEditActions.TOGGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
        name: action.payload.name ?? null,
        color: action.payload.color ?? undefined,
      };
    default:
      return state;
  }
};

export { modalColumnEditReducer };
