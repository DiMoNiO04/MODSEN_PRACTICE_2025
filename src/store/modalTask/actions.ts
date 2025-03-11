enum EModalTaskActions {
  TOGGLE_MODAL = 'TOGGLE_MODAL_TASK',
}

const toggleModalTask = () => ({
  type: EModalTaskActions.TOGGLE_MODAL,
});

export { EModalTaskActions, toggleModalTask };
