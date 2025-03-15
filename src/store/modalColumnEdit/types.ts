import { IColumn } from '@/utils/interfaces';

enum EModalColumnEditActions {
  OPEN_MODAL = 'OPEN_MODAL_COLUMN_EDIT',
  CLOSE_MODAL = 'CLOSE_MODAL_COLUMN_EDIT',
}

interface IInitialModalColumnEditState extends Omit<IColumn, 'cardIds'> {
  isOpen: boolean;
}

type TModalColumnEditAction =
  | { type: EModalColumnEditActions.OPEN_MODAL; payload: Omit<IColumn, 'cardIds'> }
  | { type: EModalColumnEditActions.CLOSE_MODAL };

export { EModalColumnEditActions };
export type { IInitialModalColumnEditState, TModalColumnEditAction };
