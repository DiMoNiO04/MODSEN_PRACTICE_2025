import { EModalColumnEditActions } from './actions';

interface IInitialModalColumnEditState extends IToggleModalColumnEditPayload {
  isOpen: boolean;
}

interface IToggleModalColumnEditPayload {
  name: string;
  color: string | undefined;
}

type TModalColumnEditAction = {
  type: EModalColumnEditActions.TOGGLE_MODAL;
  payload: { name: string; color: string | undefined };
};

export type { IInitialModalColumnEditState, IToggleModalColumnEditPayload, TModalColumnEditAction };
