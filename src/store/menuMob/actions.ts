export enum EMenuMobActions {
  TOGGLE_MENU = 'TOGGLE_MENU',
}

export const toggleMenuMob = () => ({
  type: EMenuMobActions.TOGGLE_MENU,
});
