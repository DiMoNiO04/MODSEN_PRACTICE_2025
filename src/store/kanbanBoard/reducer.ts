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

    case EKanbanBoardActions.ADD_TASK: {
      const newTask = action.payload;
      const updatedCards = { ...state.kanbanData.cards, [newTask.id]: newTask };

      const updatedColumns = { ...state.kanbanData.columns };
      updatedColumns[newTask.columnId] = {
        ...updatedColumns[newTask.columnId],
        cardIds: [...updatedColumns[newTask.columnId].cardIds, newTask.id],
      };

      const updatedKanbanData: IKanbanData = {
        ...state.kanbanData,
        columns: updatedColumns,
        cards: updatedCards,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.EDIT_TASK: {
      const updatedTask = action.payload;
      const updatedCards = { ...state.kanbanData.cards, [updatedTask.id]: updatedTask };

      const updatedColumns = { ...state.kanbanData.columns };
      const currentCard = state.kanbanData.cards[updatedTask.id];

      if (currentCard.columnId !== updatedTask.columnId) {
        updatedColumns[currentCard.columnId] = {
          ...updatedColumns[currentCard.columnId],
          cardIds: updatedColumns[currentCard.columnId].cardIds.filter((cardId) => cardId !== updatedTask.id),
        };

        updatedColumns[updatedTask.columnId] = {
          ...updatedColumns[updatedTask.columnId],
          cardIds: [...updatedColumns[updatedTask.columnId].cardIds, updatedTask.id],
        };
      } else {
        updatedColumns[currentCard.columnId] = {
          ...updatedColumns[currentCard.columnId],
          cardIds: updatedColumns[currentCard.columnId]
            ? updatedColumns[currentCard.columnId].cardIds.map((cardId) =>
                cardId === updatedTask.id ? updatedTask.id : cardId
              )
            : [],
        };
      }

      const updatedKanbanData: IKanbanData = {
        ...state.kanbanData,
        columns: updatedColumns,
        cards: updatedCards,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.DELETE_TASK: {
      const taskId = action.payload;

      const columnId = state.kanbanData.cards[taskId]?.columnId;
      if (!columnId) {
        return state;
      }

      const updatedCards = { ...state.kanbanData.cards };
      delete updatedCards[taskId];

      const updatedColumns = { ...state.kanbanData.columns };
      updatedColumns[columnId] = {
        ...updatedColumns[columnId],
        cardIds: updatedColumns[columnId].cardIds.filter((id) => id !== taskId),
      };

      const updatedKanbanData: IKanbanData = {
        ...state.kanbanData,
        columns: updatedColumns,
        cards: updatedCards,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.EDIT_PRIORITY_TASK: {
      const { taskId, priorityId } = action.payload;

      const updatedCards = { ...state.kanbanData.cards };
      if (updatedCards[taskId]) {
        updatedCards[taskId] = {
          ...updatedCards[taskId],
          priority: priorityId,
        };
      }

      const updatedKanbanData: IKanbanData = {
        ...state.kanbanData,
        cards: updatedCards,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    default: {
      return state;
    }
  }
};

export { kanbanBoardReducer };
