import { IOption } from '@/utils';

import { EModalTaskAddActions } from './actions';

interface IInitialModalTaskAddState extends IToggleModalTaskAddPayload {
  isOpen: boolean;
}

interface IToggleModalTaskAddPayload {
  isFromHeader?: boolean;
  status?: IOption | null;
}

type TModalTaskAddAction = {
  type: EModalTaskAddActions.TOGGLE_MODAL;
  payload: { isFromHeader?: boolean; status?: IOption | null };
};

export type { IInitialModalTaskAddState, IToggleModalTaskAddPayload, TModalTaskAddAction };
