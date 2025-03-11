import { EModalColumnAddActions } from './actions';

interface IInitialModalColumnAddState {
  isOpen: boolean;
}

type TModalColumnAddAction = { type: EModalColumnAddActions.TOGGLE_MODAL };

export type { IInitialModalColumnAddState, TModalColumnAddAction };
