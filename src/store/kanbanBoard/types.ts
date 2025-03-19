import { EPriorityName } from '@/constants/cardPriority';
import { ICard, IColumn, IKanbanData } from '@/utils/interfaces';

enum EKanbanBoardActions {
  SET_DATA = 'SET_DATA_KANBAN',
  ADD_COLUMN = 'ADD_COLUMN_KANBAN',
  EDIT_COLUMN = 'EDIT_COLUMN_KANBAN',
  DELETE_COLUMN = 'DELETE_COLUMN_KANBAN',
  ADD_TASK = 'ADD_TASK_KANBAN',
  EDIT_TASK = 'EDIT_TASK_KANBAN',
  DELETE_TASK = 'DELETE_TASK_KANBAN',
  EDIT_PRIORITY_TASK = 'EDIT_PRIORITY_TASK',
  DRAG_DROP_CARD_BETWEEN_COLUMNS = 'DRAG_DROP_CARD_BETWEEN_COLUMNS',
  DRAG_DROP_CARD_IN_COLUMN = 'DRAG_DROP_CARD_IN_COLUMN',
}

interface IInitialKanbanBoardState {
  kanbanData: IKanbanData;
}

interface IEditPriorityTaskPayload {
  taskId: string;
  priorityId: EPriorityName;
}

interface IDragCardInBetweenColumnsPayload {
  fromColumnId: string;
  draggedCardId: string;
  columnId: string;
}

interface IDragCardInColumnPayload {
  columnId: string;
  draggedCardId: string;
  cardId: string;
}

type TKanbanBoardAction =
  | { type: EKanbanBoardActions.SET_DATA; payload: IKanbanData }
  | { type: EKanbanBoardActions.ADD_COLUMN; payload: IColumn }
  | { type: EKanbanBoardActions.EDIT_COLUMN; payload: IColumn }
  | { type: EKanbanBoardActions.DELETE_COLUMN; payload: string }
  | { type: EKanbanBoardActions.ADD_TASK; payload: ICard }
  | { type: EKanbanBoardActions.EDIT_TASK; payload: ICard }
  | { type: EKanbanBoardActions.DELETE_TASK; payload: string }
  | { type: EKanbanBoardActions.EDIT_PRIORITY_TASK; payload: IEditPriorityTaskPayload }
  | { type: EKanbanBoardActions.DRAG_DROP_CARD_BETWEEN_COLUMNS; payload: IDragCardInBetweenColumnsPayload }
  | { type: EKanbanBoardActions.DRAG_DROP_CARD_IN_COLUMN; payload: IDragCardInColumnPayload };

export { EKanbanBoardActions };
export type {
  IDragCardInBetweenColumnsPayload,
  IDragCardInColumnPayload,
  IEditPriorityTaskPayload,
  IInitialKanbanBoardState,
  TKanbanBoardAction,
};
