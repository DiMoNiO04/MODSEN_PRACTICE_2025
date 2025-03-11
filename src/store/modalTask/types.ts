import { EModalTaskActions } from './actions';

interface IInitialModalTaskState {
  isOpen: boolean;
}

type TModalTaskAction = { type: EModalTaskActions.TOGGLE_MODAL };

export type { IInitialModalTaskState, TModalTaskAction };
