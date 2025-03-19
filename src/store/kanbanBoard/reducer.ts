import { ICard, IColumn, IKanbanData } from '@/utils/interfaces';
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
      const { kanbanData } = state;
      const { columnsOrder, columns } = kanbanData;

      const newColumn = action.payload;
      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: { ...columns, [newColumn.id]: newColumn },
        columnsOrder: [...columnsOrder, newColumn.id],
      };
      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.EDIT_COLUMN: {
      const { kanbanData } = state;
      const { columns } = kanbanData;

      const updatedColumn = action.payload;

      const updatedColums = {
        ...columns,
        [updatedColumn.id]: updatedColumn,
      };

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: updatedColums,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.DELETE_COLUMN: {
      const { kanbanData } = state;

      const columnId = action.payload;
      const updatedKanbanData: IKanbanData = { ...kanbanData };

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
      const { kanbanData } = state;
      const { cards, columns } = kanbanData;

      const newTask = action.payload;
      const updatedCards = { ...cards, [newTask.id]: newTask };

      const updatedColumns = { ...columns };
      updatedColumns[newTask.columnId] = {
        ...updatedColumns[newTask.columnId],
        cardIds: [...updatedColumns[newTask.columnId].cardIds, newTask.id],
      };

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: updatedColumns,
        cards: updatedCards,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.EDIT_TASK: {
      const { kanbanData } = state;
      const { cards, columns } = kanbanData;

      const updatedTask = action.payload;
      const updatedCards = { ...cards, [updatedTask.id]: updatedTask };

      const updatedColumns = { ...columns };
      const currentCard = cards[updatedTask.id];

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
        ...kanbanData,
        columns: updatedColumns,
        cards: updatedCards,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.DELETE_TASK: {
      const { kanbanData } = state;
      const { columns, cards } = kanbanData;

      const taskId = action.payload;

      const columnId = cards[taskId]?.columnId;
      if (!columnId) {
        return state;
      }

      const updatedCards = { ...cards };
      delete updatedCards[taskId];

      const updatedColumns = { ...columns };
      updatedColumns[columnId] = {
        ...updatedColumns[columnId],
        cardIds: updatedColumns[columnId].cardIds.filter((id) => id !== taskId),
      };

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: updatedColumns,
        cards: updatedCards,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.EDIT_PRIORITY_TASK: {
      const { kanbanData } = state;
      const { cards } = kanbanData;

      const { taskId, priorityId } = action.payload;

      const updatedCards = { ...cards };
      if (updatedCards[taskId]) {
        updatedCards[taskId] = {
          ...updatedCards[taskId],
          priority: priorityId,
        };
      }

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        cards: updatedCards,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.DRAG_DROP_CARD_BETWEEN_COLUMNS: {
      const { kanbanData } = state;
      const { columns, cards } = kanbanData;

      const { fromColumnId, draggedCardId, columnId } = action.payload;

      const fromColumn = columns[fromColumnId];
      const updatedFromCardIds = fromColumn.cardIds.filter((cardId) => cardId !== draggedCardId);

      const updatedCard = { ...cards[draggedCardId], columnId };

      const updatedCardIds = [...columns[columnId].cardIds, draggedCardId];

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: {
          ...columns,
          [fromColumnId]: {
            ...fromColumn,
            cardIds: updatedFromCardIds,
          },
          [columnId]: {
            ...columns[columnId],
            cardIds: updatedCardIds,
          },
        },
        cards: {
          ...cards,
          [draggedCardId]: updatedCard,
        },
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.DRAG_DROP_CARD_IN_COLUMN: {
      const { kanbanData } = state;
      const { columns } = kanbanData;

      const { columnId, draggedCardId, cardId } = action.payload;

      const updatedCardIds = [...columns[columnId].cardIds];
      const fromIndex = updatedCardIds.indexOf(draggedCardId);
      const toIndex = updatedCardIds.indexOf(cardId);

      if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) return state;

      updatedCardIds.splice(fromIndex, 1);
      updatedCardIds.splice(toIndex, 0, draggedCardId);

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: {
          ...columns,
          [columnId]: {
            ...columns[columnId],
            cardIds: updatedCardIds,
          },
        },
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.DRAG_DROP_COLUMN: {
      const { kanbanData } = state;
      const { columnsOrder } = kanbanData;

      const { draggedColumnId, id, draggedCardId } = action.payload;

      if (draggedCardId) return state;

      const fromIndex = columnsOrder.indexOf(draggedColumnId);
      const toIndex = columnsOrder.indexOf(id);

      if (fromIndex === -1 || toIndex === -1) return state;

      const updatedColumnsOrder = [...columnsOrder];
      updatedColumnsOrder.splice(fromIndex, 1);
      updatedColumnsOrder.splice(toIndex, 0, draggedColumnId);

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columnsOrder: updatedColumnsOrder,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.DRAG_DROP_COLUMN_CARD: {
      const { kanbanData } = state;
      const { columns, cards } = kanbanData;

      const { cardIds, id, fromColumnId, draggedCardId } = action.payload;

      const updatedCardIds = [...cardIds];

      if (fromColumnId === id) return state;

      const fromColumn: IColumn = columns[fromColumnId];
      const updatedFromCardIds: string[] = fromColumn.cardIds.filter((cardId) => cardId !== draggedCardId);

      const updatedCard: ICard = { ...cards[draggedCardId], columnId: id };

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: {
          ...columns,
          [fromColumnId]: {
            ...fromColumn,
            cardIds: updatedFromCardIds,
          },
          [id]: {
            ...columns[id],
            cardIds: [...updatedCardIds, draggedCardId],
          },
        },
        cards: {
          ...cards,
          [draggedCardId]: updatedCard,
        },
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
