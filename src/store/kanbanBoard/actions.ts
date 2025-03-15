import { IKanbanData } from '@/utils/interfaces';

import { EKanbanBoardActions, TKanbanBoardAction } from './types';

const setKanbanBoardData = (payload: IKanbanData): TKanbanBoardAction => ({
  type: EKanbanBoardActions.SET_DATA,
  payload,
});

export { setKanbanBoardData };
