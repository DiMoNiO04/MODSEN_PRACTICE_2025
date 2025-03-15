import { IColumn } from '@/utils/interfaces';

import { EColumnActions, TColumnAction } from './types';

const addColumn = (payload: IColumn): TColumnAction => ({
  type: EColumnActions.ADD_COLUMN,
  payload,
});

export { addColumn };
