import { EMenuMobActions } from './actions';

export interface IInitialMenuMobState {
  isOpen: boolean;
}

const initialMenuMobState: IInitialMenuMobState = {
  isOpen: false,
};

type TMenuMobAction = { type: EMenuMobActions.TOGGLE_MENU };

const menuMobReducer = (state = initialMenuMobState, action: TMenuMobAction): IInitialMenuMobState => {
  switch (action.type) {
    case EMenuMobActions.TOGGLE_MENU:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export { menuMobReducer };
