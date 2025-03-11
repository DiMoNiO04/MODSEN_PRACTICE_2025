import { IToggleModalTaskAddPayload } from './types';

enum EModalTaskAddActions {
  TOGGLE_MODAL = 'TOGGLE_MODAL_TASK_ADD',
}

const toggleModalTaskAdd = (payload: IToggleModalTaskAddPayload = {}) => ({
  type: EModalTaskAddActions.TOGGLE_MODAL,
  payload,
});

export { EModalTaskAddActions, toggleModalTaskAdd };
export type { IToggleModalTaskAddPayload };
