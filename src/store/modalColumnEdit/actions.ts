import { EModalColumnEditActions, IInitialModalColumnEditPayload } from './types';
import { TModalColumnEditAction } from './types';

const openModalColumnEdit = (payload: IInitialModalColumnEditPayload): TModalColumnEditAction => ({
  type: EModalColumnEditActions.OPEN_MODAL,
  payload,
});

const closeModalColumnEdit = (): TModalColumnEditAction => ({
  type: EModalColumnEditActions.CLOSE_MODAL,
});

export { closeModalColumnEdit, openModalColumnEdit };
