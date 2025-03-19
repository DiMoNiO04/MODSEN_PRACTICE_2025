enum EModalColumnEditActions {
  OPEN_MODAL = 'OPEN_MODAL_COLUMN_EDIT',
  CLOSE_MODAL = 'CLOSE_MODAL_COLUMN_EDIT',
}

interface IInitialModalColumnEditPayload {
  id: string;
}

interface IInitialModalColumnEditState extends IInitialModalColumnEditPayload {
  isOpen: boolean;
}

type TModalColumnEditAction =
  | { type: EModalColumnEditActions.OPEN_MODAL; payload: IInitialModalColumnEditPayload }
  | { type: EModalColumnEditActions.CLOSE_MODAL };

export { EModalColumnEditActions };
export type { IInitialModalColumnEditPayload, IInitialModalColumnEditState, TModalColumnEditAction };
