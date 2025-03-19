import { IColumn, ITask } from '@/utils/interfaces';

import {
  EKanbanBoardActions,
  IDragDropColumn,
  IDragDropTask,
  IEditPriorityTaskPayload,
  TKanbanBoardAction,
} from './types';

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

const dragDropTask = (payload: IDragDropTask): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DRAG_DROP_TASK,
  payload,
});

const dragDropColumn = (payload: IDragDropColumn): TKanbanBoardAction => ({
  type: EKanbanBoardActions.DRAG_DROP_COLUMN,
  payload,
});

export {
  addKanbanColumn,
  addKanbanTask,
  deleteKanbanColumn,
  deleteKanbanTask,
  dragDropColumn,
  dragDropTask,
  editKanbanColumn,
  editKanbanTask,
  editKanbanTaskPriority,
};
