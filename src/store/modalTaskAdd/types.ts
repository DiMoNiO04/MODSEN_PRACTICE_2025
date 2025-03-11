import { EModalTaskAddActions } from './actions';

interface IInitialModalTaskAddState {
  isOpen: boolean;
  isFromHeader: boolean;
}

type TModalTaskAddAction = {
  type: EModalTaskAddActions.TOGGLE_MODAL;
  payload: boolean;
};

export type { IInitialModalTaskAddState, TModalTaskAddAction };
