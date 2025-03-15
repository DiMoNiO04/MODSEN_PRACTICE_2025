import { IKanbanData } from '@/utils/interfaces';

import { EKanbanBoardActions, TKanbanBoardAction } from './types';

const getKanbanBoardData = (): TKanbanBoardAction => ({
  type: EKanbanBoardActions.GET_DATA,
});

const setKanbanBoardData = (payload: IKanbanData): TKanbanBoardAction => ({
  type: EKanbanBoardActions.SET_DATA,
  payload,
});

export { getKanbanBoardData, setKanbanBoardData };
