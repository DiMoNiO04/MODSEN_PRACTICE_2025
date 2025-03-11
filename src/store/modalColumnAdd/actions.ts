enum EModalColumnAddActions {
  TOGGLE_MODAL = 'TOGGLE_MODAL_COLUMN_ADD',
}

const toggleModaColumnAdd = () => ({
  type: EModalColumnAddActions.TOGGLE_MODAL,
});

export { EModalColumnAddActions, toggleModaColumnAdd };
