import { EMenuMobActions, TMenuMobAction } from './types';

const openMenuMob = (): TMenuMobAction => ({
  type: EMenuMobActions.OPEN_MENU,
});

const closeMenuMob = (): TMenuMobAction => ({
  type: EMenuMobActions.CLOSE_MENU,
});

export { closeMenuMob, EMenuMobActions, openMenuMob };
