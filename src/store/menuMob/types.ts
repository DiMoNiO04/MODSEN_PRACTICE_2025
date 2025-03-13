enum EMenuMobActions {
  OPEN_MENU = 'OPEN_MENU_MOB',
  CLOSE_MENU = 'CLOSE_MENU_MOB',
}

interface IInitialMenuMobState {
  isOpen: boolean;
}

type TMenuMobAction = { type: EMenuMobActions.OPEN_MENU } | { type: EMenuMobActions.CLOSE_MENU };

export { EMenuMobActions };
export type { IInitialMenuMobState, TMenuMobAction };
