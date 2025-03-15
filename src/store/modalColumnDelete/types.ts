enum EModalColumnDeleteActions {
  OPEN_MODAL = 'OPEN_MODAL_COLUMN_DELETE',
  CLOSE_MODAL = 'CLOSE_MODAL_COLUMN_DELETE',
}

interface IOpenModalColumnDeletePayload {
  id: string;
}

interface IInitialModalColumnDeleteState extends IOpenModalColumnDeletePayload {
  isOpen: boolean;
}

type TModalColumnDeleteAction =
  | { type: EModalColumnDeleteActions.OPEN_MODAL; payload: IOpenModalColumnDeletePayload }
  | { type: EModalColumnDeleteActions.CLOSE_MODAL };

export { EModalColumnDeleteActions };
export type { IInitialModalColumnDeleteState, IOpenModalColumnDeletePayload, TModalColumnDeleteAction };
