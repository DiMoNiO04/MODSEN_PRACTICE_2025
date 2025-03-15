import { EModalColumnDeleteActions } from './types';
import { IOpenModalColumnDeletePayload, TModalColumnDeleteAction } from './types';

const openModalColumnDelete = (payload: IOpenModalColumnDeletePayload): TModalColumnDeleteAction => ({
  type: EModalColumnDeleteActions.OPEN_MODAL,
  payload,
});

const closeModalColumnDelete = (): TModalColumnDeleteAction => ({
  type: EModalColumnDeleteActions.CLOSE_MODAL,
});

export { closeModalColumnDelete, openModalColumnDelete };
