import { EModalColumnEditActions } from './actions';

interface IInitialModalColumnEditState {
  isOpen: boolean;
}

type TModalColumnEditAction = { type: EModalColumnEditActions.TOGGLE_MODAL };

export type { IInitialModalColumnEditState, TModalColumnEditAction };
