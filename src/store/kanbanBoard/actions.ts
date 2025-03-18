import { IColumn, IKanbanData } from '@/utils/interfaces';

import { EKanbanBoardActions, TKanbanBoardAction } from './types';

const setKanbanBoardData = (payload: IKanbanData): TKanbanBoardAction => ({
  type: EKanbanBoardActions.SET_DATA,
  payload,
});

const addKanbanColumn = (payload: IColumn): TKanbanBoardAction => ({
  type: EKanbanBoardActions.ADD_COLUMN,
  payload,
});

const editKanbanColumn = (payload: IColumn): TKanbanBoardAction => ({
  type: EKanbanBoardActions.EDIT_COLUMN,
  payload,
});

const deleteKanbanColumn = (payload: string): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DELETE_COLUMN,
  payload,
});

export { addKanbanColumn, deleteKanbanColumn, editKanbanColumn, setKanbanBoardData };
