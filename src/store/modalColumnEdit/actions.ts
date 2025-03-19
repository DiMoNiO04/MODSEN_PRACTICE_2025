import { IColumn } from '@/utils/interfaces';

import { EModalColumnEditActions } from './types';
import { TModalColumnEditAction } from './types';

const openModalColumnEdit = (payload: Omit<IColumn, 'taskIds'>): TModalColumnEditAction => ({
  type: EModalColumnEditActions.OPEN_MODAL,
  payload,
});

const closeModalColumnEdit = (): TModalColumnEditAction => ({
  type: EModalColumnEditActions.CLOSE_MODAL,
});

export { closeModalColumnEdit, openModalColumnEdit };
