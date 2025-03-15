enum EModalTaskAddActions {
  OPEN_MODAL = 'OPEN_MODAL_TASK_ADD',
  CLOSE_MODAL = 'CLOSE_MODAL_TASK_ADD',
}

interface IToggleModalTaskAddPayload {
  isFromHeader?: boolean;
  columnId?: string;
}

interface IInitialModalTaskAddState extends IToggleModalTaskAddPayload {
  isOpen: boolean;
}

type TModalTaskAddAction =
  | { type: EModalTaskAddActions.OPEN_MODAL; payload: IToggleModalTaskAddPayload }
  | { type: EModalTaskAddActions.CLOSE_MODAL };

export { EModalTaskAddActions };
export type { IInitialModalTaskAddState, IToggleModalTaskAddPayload, TModalTaskAddAction };
