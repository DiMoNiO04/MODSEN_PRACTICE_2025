import { IColumn, IKanbanData, ITask } from '@/utils/interfaces';

import {
  EKanbanBoardActions,
  IDragDropColumn,
  IDragDropColumnTask,
  IDragTaskInBetweenColumnsPayload,
  IDragTaskInColumnPayload,
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

const addKanbanTask = (payload: ITask): TKanbanBoardAction => ({
  type: EKanbanBoardActions.ADD_TASK,
  payload,
});

const editKanbanTask = (payload: ITask): TKanbanBoardAction => ({
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

const dragDropTaskBetweenColumns = (payload: IDragTaskInBetweenColumnsPayload): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DRAG_DROP_TASK_BETWEEN_COLUMNS,
  payload,
});

const dragDropTaskInColumn = (payload: IDragTaskInColumnPayload): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DRAG_DROP_TASK_IN_COLUMN,
  payload,
});

const dragDropColumn = (payload: IDragDropColumn): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DRAG_DROP_COLUMN,
  payload,
});

const dragDropColumnTask = (payload: IDragDropColumnTask): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DRAG_DROP_COLUMN_TASK,
  payload,
});

export {
  addKanbanColumn,
  addKanbanTask,
  deleteKanbanColumn,
  deleteKanbanTask,
  dragDropColumn,
  dragDropColumnTask,
  dragDropTaskBetweenColumns,
  dragDropTaskInColumn,
  editKanbanColumn,
  editKanbanTask,
  editKanbanTaskPriority,
  setKanbanBoardData,
};
