import { EMenuMobActions } from './actions';

interface IInitialMenuMobState {
  isOpen: boolean;
}

type TMenuMobAction = { type: EMenuMobActions.OPEN_MENU } | { type: EMenuMobActions.CLOSE_MENU };

export type { IInitialMenuMobState, TMenuMobAction };
