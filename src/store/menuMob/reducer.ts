import { EMenuMobActions } from './actions';
import { IInitialMenuMobState, TMenuMobAction } from './types';

const initialMenuMobState: IInitialMenuMobState = {
  isOpen: false,
};

const menuMobReducer = (state = initialMenuMobState, action: TMenuMobAction): IInitialMenuMobState => {
  switch (action.type) {
    case EMenuMobActions.TOGGLE_MENU:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export { menuMobReducer };
