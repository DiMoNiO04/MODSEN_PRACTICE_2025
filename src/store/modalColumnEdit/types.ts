enum EModalColumnEditActions {
  OPEN_MODAL = 'OPEN_MODAL_COLUMN_EDIT',
  CLOSE_MODAL = 'CLOSE_MODAL_COLUMN_EDIT',
}

interface IOpenModalColumnEditPayload {
  name: string;
  color: string;
}

interface IInitialModalColumnEditState extends IOpenModalColumnEditPayload {
  isOpen: boolean;
}

type TModalColumnEditAction =
  | { type: EModalColumnEditActions.OPEN_MODAL; payload: IOpenModalColumnEditPayload }
  | { type: EModalColumnEditActions.CLOSE_MODAL };

export { EModalColumnEditActions };
export type { IInitialModalColumnEditState, IOpenModalColumnEditPayload, TModalColumnEditAction };
