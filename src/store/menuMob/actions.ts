import { EMenuMobActions } from './types';

const openMenuMob = () => ({
  type: EMenuMobActions.OPEN_MENU,
});

const closeMenuMob = () => ({
  type: EMenuMobActions.CLOSE_MENU,
});

export { closeMenuMob, EMenuMobActions, openMenuMob };
