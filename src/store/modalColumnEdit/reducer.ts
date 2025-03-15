import { EModalColumnEditActions } from './types';
import { IInitialModalColumnEditState, TModalColumnEditAction } from './types';

const initialModalColumnEditState: IInitialModalColumnEditState = {
  isOpen: false,
  title: '',
  color: '',
};

const modalColumnEditReducer = (
  state = initialModalColumnEditState,
  action: TModalColumnEditAction
): IInitialModalColumnEditState => {
  switch (action.type) {
    case EModalColumnEditActions.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        title: action.payload.title,
        color: action.payload.color,
      };
    case EModalColumnEditActions.CLOSE_MODAL:
      return { ...initialModalColumnEditState };
    default:
      return state;
  }
};

export { modalColumnEditReducer };
