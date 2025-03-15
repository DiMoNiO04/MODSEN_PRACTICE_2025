import { IKanbanData } from '@/utils/interfaces';

enum EKanbanBoardActions {
  GET_DATA = 'GET_DATA_KANBAN',
  SET_DATA = 'SET_DATA_KANBAN',
}

interface IInitialKanbanBoardState {
  kanbanData: IKanbanData;
}

type TKanbanBoardAction =
  | { type: EKanbanBoardActions.GET_DATA }
  | { type: EKanbanBoardActions.SET_DATA; payload: IKanbanData };

export { EKanbanBoardActions };
export type { IInitialKanbanBoardState, TKanbanBoardAction };
