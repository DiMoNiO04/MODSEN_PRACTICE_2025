import { EColors, UITexts } from '@/constants';
import { IKanbanData } from '@/utils/interfaces';
import { kanbanStorage } from '@/utils/kanbanStorage';

import { EColumnActions, IColumnState, TColumnAction } from './types';

const initialColumnState: IColumnState = {
  columns: {
    'column-1': { id: 'column-1', title: UITexts.STATUSES.TODO, color: EColors.BLUE, cardIds: [] },
    'column-2': { id: 'column-2', title: UITexts.STATUSES.PROGRESS, color: EColors.ORANGE, cardIds: [] },
    'column-3': { id: 'column-3', title: UITexts.STATUSES.DONE, color: EColors.GREEN, cardIds: [] },
  },
};

const columnReducer = (state = initialColumnState, action: TColumnAction): IColumnState => {
  switch (action.type) {
    case EColumnActions.ADD_COLUMN: {
      const newColumns = {
        ...state.columns,
        [action.payload.id]: {
          id: action.payload.id,
          title: action.payload.title,
          color: action.payload.color,
          cardIds: [],
        },
      };

      const updatedKanbanData: IKanbanData = {
        columns: newColumns,
        cards: kanbanStorage.getKanbanData().cards,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);

      return {
        ...state,
        columns: newColumns,
      };
    }

    default: {
      return state;
    }
  }
};

export { columnReducer };
