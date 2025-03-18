import { IColumn, IKanbanData } from '@/utils/interfaces';

enum EKanbanBoardActions {
  SET_DATA = 'SET_DATA_KANBAN',
  ADD_COLUMN = 'ADD_COLUMN_KANBAN',
  EDIT_COLUMN = 'EDIT_COLUMN_KANBAN',
  DELETE_COLUMN = 'DELETE_COLUMN_KANBAN',
}

interface IInitialKanbanBoardState {
  kanbanData: IKanbanData;
}

type TKanbanBoardAction =
  | { type: EKanbanBoardActions.SET_DATA; payload: IKanbanData }
  | { type: EKanbanBoardActions.ADD_COLUMN; payload: IColumn }
  | { type: EKanbanBoardActions.EDIT_COLUMN; payload: IColumn }
  | { type: EKanbanBoardActions.DELETE_COLUMN; payload: string };

export { EKanbanBoardActions };
export type { IInitialKanbanBoardState, TKanbanBoardAction };
