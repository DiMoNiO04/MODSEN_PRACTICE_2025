import { IColumn } from '@/utils/interfaces';

enum EColumnActions {
  ADD_COLUMN = 'ADD_COLUMN',
}

interface IColumnState {
  columns: { [key: string]: IColumn };
}

type TColumnAction = { type: EColumnActions.ADD_COLUMN; payload: IColumn };

export { EColumnActions };
export type { IColumnState, TColumnAction };
