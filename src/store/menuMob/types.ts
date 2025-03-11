import { EMenuMobActions } from './actions';

interface IInitialMenuMobState {
  isOpen: boolean;
}

type TMenuMobAction = { type: EMenuMobActions.TOGGLE_MENU };

export type { IInitialMenuMobState, TMenuMobAction };
