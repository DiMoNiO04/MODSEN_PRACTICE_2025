enum EModalTaskAddActions {
  TOGGLE_MODAL = 'TOGGLE_MODAL_TASK_ADD',
}

const toggleModalTaskAdd = (isFromHeader: boolean = false) => ({
  type: EModalTaskAddActions.TOGGLE_MODAL,
  payload: isFromHeader,
});

export { EModalTaskAddActions, toggleModalTaskAdd };
