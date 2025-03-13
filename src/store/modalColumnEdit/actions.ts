import { EModalColumnEditActions } from './types';
import { IOpenModalColumnEditPayload, TModalColumnEditAction } from './types';

const openModalColumnEdit = (payload: IOpenModalColumnEditPayload): TModalColumnEditAction => ({
  type: EModalColumnEditActions.OPEN_MODAL,
  payload,
});

const closeModalColumnEdit = (): TModalColumnEditAction => ({
  type: EModalColumnEditActions.CLOSE_MODAL,
});

export { closeModalColumnEdit, openModalColumnEdit };
