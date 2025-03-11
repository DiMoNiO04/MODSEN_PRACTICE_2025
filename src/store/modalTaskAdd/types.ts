import { EModalTaskAddActions } from './actions';

interface IInitialModalTaskAddState {
  isOpen: boolean;
}

type TModalTaskAddAction = { type: EModalTaskAddActions.TOGGLE_MODAL };

export type { IInitialModalTaskAddState, TModalTaskAddAction };
