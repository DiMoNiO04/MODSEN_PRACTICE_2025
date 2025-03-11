enum EModalTaskAddActions {
  TOGGLE_MODAL = 'TOGGLE_MODAL_TASK_ADD',
}

const toggleModalTaskAdd = () => ({
  type: EModalTaskAddActions.TOGGLE_MODAL,
});

export { EModalTaskAddActions, toggleModalTaskAdd };
