enum EMenuMobActions {
  OPEN_MENU = 'OPEN_MENU',
  CLOSE_MENU = 'CLOSE_MENU',
}

const openMenuMob = () => ({
  type: EMenuMobActions.OPEN_MENU,
});

const closeMenuMob = () => ({
  type: EMenuMobActions.CLOSE_MENU,
});

export { closeMenuMob, EMenuMobActions, openMenuMob };
