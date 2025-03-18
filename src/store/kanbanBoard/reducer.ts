import { IKanbanData } from '@/utils/interfaces';
import { kanbanStorage } from '@/utils/kanbanStorage';

import { EKanbanBoardActions, IInitialKanbanBoardState, TKanbanBoardAction } from './types';

const initialKanbanBoardData: IInitialKanbanBoardState = {
  kanbanData: kanbanStorage.getKanbanData(),
};

const kanbanBoardReducer = (state = initialKanbanBoardData, action: TKanbanBoardAction): IInitialKanbanBoardState => {
  switch (action.type) {
    case EKanbanBoardActions.SET_DATA: {
      kanbanStorage.saveKanbanData(action.payload);
      return {
        ...state,
        kanbanData: action.payload,
      };
    }

    case EKanbanBoardActions.ADD_COLUMN: {
      const newColumn = action.payload;
      const updatedKanbanData: IKanbanData = {
        ...state.kanbanData,
        columns: { ...state.kanbanData.columns, [newColumn.id]: newColumn },
        columnsOrder: [...state.kanbanData.columnsOrder, newColumn.id],
      };
      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.EDIT_COLUMN: {
      const updatedColumn = action.payload;
      const updatedColums = {
        ...state.kanbanData.columns,
        [updatedColumn.id]: updatedColumn,
      };

      const updatedKanbanData: IKanbanData = {
        ...state.kanbanData,
        columns: updatedColums,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.DELETE_COLUMN: {
      const columnId = action.payload;
      const updatedKanbanData: IKanbanData = { ...state.kanbanData };

      const column = updatedKanbanData.columns[columnId];
      column.cardIds.forEach((cardId) => {
        delete updatedKanbanData.cards[cardId];
      });

      delete updatedKanbanData.columns[columnId];
      updatedKanbanData.columnsOrder = updatedKanbanData.columnsOrder.filter((id) => id !== columnId);

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    default: {
      return state;
    }
  }
};

export { kanbanBoardReducer };
