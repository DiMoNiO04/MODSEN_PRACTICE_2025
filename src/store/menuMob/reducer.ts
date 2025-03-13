import { EMenuMobActions } from './actions';
import { IInitialMenuMobState, TMenuMobAction } from './types';

const initialMenuMobState: IInitialMenuMobState = {
  isOpen: false,
};

const menuMobReducer = (state = initialMenuMobState, action: TMenuMobAction): IInitialMenuMobState => {
  switch (action.type) {
    case EMenuMobActions.OPEN_MENU:
      return { ...state, isOpen: true };
    case EMenuMobActions.CLOSE_MENU:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export { menuMobReducer };
