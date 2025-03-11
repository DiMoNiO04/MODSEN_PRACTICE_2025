enum EMenuMobActions {
  TOGGLE_MENU = 'TOGGLE_MENU',
}

const toggleMenuMob = () => ({
  type: EMenuMobActions.TOGGLE_MENU,
});

export { EMenuMobActions, toggleMenuMob };
