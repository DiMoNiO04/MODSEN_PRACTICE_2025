import { IKanbanData } from '@/utils/interfaces';

enum EKanbanBoardActions {
  SET_DATA = 'SET_DATA_KANBAN',
}

interface IInitialKanbanBoardState {
  kanbanData: IKanbanData;
}

type TKanbanBoardAction = { type: EKanbanBoardActions.SET_DATA; payload: IKanbanData };

export { EKanbanBoardActions };
export type { IInitialKanbanBoardState, TKanbanBoardAction };
