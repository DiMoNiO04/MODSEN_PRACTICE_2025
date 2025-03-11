enum EModalConfirmActions {
  TOGGLE_MODAL = 'TOGGLE_MODAL_CONFIRM',
}

const toggleModalConfirm = () => ({
  type: EModalConfirmActions.TOGGLE_MODAL,
});

export { EModalConfirmActions, toggleModalConfirm };
