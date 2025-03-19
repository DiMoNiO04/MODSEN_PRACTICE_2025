import { ICard, IColumn, IKanbanData } from '@/utils/interfaces';

import {
  EKanbanBoardActions,
  IDragCardInBetweenColumnsPayload,
  IDragCardInColumnPayload,
  IDragDropColumn,
  IDragDropColumnCard,
  IEditPriorityTaskPayload,
  TKanbanBoardAction,
} from './types';

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

const addKanbanTask = (payload: ICard): TKanbanBoardAction => ({
  type: EKanbanBoardActions.ADD_TASK,
  payload,
});

const editKanbanTask = (payload: ICard): TKanbanBoardAction => ({
  type: EKanbanBoardActions.EDIT_TASK,
  payload,
});

const deleteKanbanTask = (payload: string): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DELETE_TASK,
  payload,
});

const editKanbanTaskPriority = (payload: IEditPriorityTaskPayload): TKanbanBoardAction => ({
  type: EKanbanBoardActions.EDIT_PRIORITY_TASK,
  payload,
});

const dragDropCardBetweenColumns = (payload: IDragCardInBetweenColumnsPayload): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DRAG_DROP_CARD_BETWEEN_COLUMNS,
  payload,
});

const dragDropCardInColumn = (payload: IDragCardInColumnPayload): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DRAG_DROP_CARD_IN_COLUMN,
  payload,
});

const dragDropColumn = (payload: IDragDropColumn): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DRAG_DROP_COLUMN,
  payload,
});

const dragDropColumnCard = (payload: IDragDropColumnCard): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DRAG_DROP_COLUMN_CARD,
  payload,
});

export {
  addKanbanColumn,
  addKanbanTask,
  deleteKanbanColumn,
  deleteKanbanTask,
  dragDropCardBetweenColumns,
  dragDropCardInColumn,
  dragDropColumn,
  dragDropColumnCard,
  editKanbanColumn,
  editKanbanTask,
  editKanbanTaskPriority,
  setKanbanBoardData,
};
