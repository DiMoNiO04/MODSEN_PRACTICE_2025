import { IToggleModalColumnEditPayload } from './types';

enum EModalColumnEditActions {
  TOGGLE_MODAL = 'TOGGLE_MODAL_COLUMN_EDIT',
}

const toggleModaColumnEdit = (payload: IToggleModalColumnEditPayload) => ({
  type: EModalColumnEditActions.TOGGLE_MODAL,
  payload,
});

export { EModalColumnEditActions, toggleModaColumnEdit };
