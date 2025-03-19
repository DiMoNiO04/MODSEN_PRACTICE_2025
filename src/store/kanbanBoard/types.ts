import { EPriorityName } from '@/constants/taskPriority';
import { IColumn, IKanbanData, ITask } from '@/utils/interfaces';

enum EKanbanBoardActions {
  SET_DATA = 'SET_DATA_KANBAN',
  ADD_COLUMN = 'ADD_COLUMN_KANBAN',
  EDIT_COLUMN = 'EDIT_COLUMN_KANBAN',
  DELETE_COLUMN = 'DELETE_COLUMN_KANBAN',
  ADD_TASK = 'ADD_TASK_KANBAN',
  EDIT_TASK = 'EDIT_TASK_KANBAN',
  DELETE_TASK = 'DELETE_TASK_KANBAN',
  EDIT_PRIORITY_TASK = 'EDIT_PRIORITY_TASK',
  DRAG_DROP_TASK_BETWEEN_COLUMNS = 'DRAG_DROP_TASK_BETWEEN_COLUMNS',
  DRAG_DROP_TASK_IN_COLUMN = 'DRAG_DROP_TASK_IN_COLUMN',
  DRAG_DROP_COLUMN = 'DRAG_DROP_COLUMN',
  DRAG_DROP_COLUMN_TASK = 'DRAG_DROP_COLUMN_TASK',
}

interface IInitialKanbanBoardState {
  kanbanData: IKanbanData;
}

interface IEditPriorityTaskPayload {
  taskId: string;
  priorityId: EPriorityName;
}

interface IDragTaskInBetweenColumnsPayload {
  fromColumnId: string;
  draggedTaskId: string;
  columnId: string;
}

interface IDragTaskInColumnPayload {
  columnId: string;
  draggedTaskId: string;
  taskId: string;
}

interface IDragDropColumn {
  draggedColumnId: string;
  id: string;
  draggedTaskId: string;
}

interface IDragDropColumnTask {
  taskIds: string[];
  id: string;
  fromColumnId: string;
  draggedTaskId: string;
}

type TKanbanBoardAction =
  | { type: EKanbanBoardActions.SET_DATA; payload: IKanbanData }
  | { type: EKanbanBoardActions.ADD_COLUMN; payload: IColumn }
  | { type: EKanbanBoardActions.EDIT_COLUMN; payload: IColumn }
  | { type: EKanbanBoardActions.DELETE_COLUMN; payload: string }
  | { type: EKanbanBoardActions.ADD_TASK; payload: ITask }
  | { type: EKanbanBoardActions.EDIT_TASK; payload: ITask }
  | { type: EKanbanBoardActions.DELETE_TASK; payload: string }
  | { type: EKanbanBoardActions.EDIT_PRIORITY_TASK; payload: IEditPriorityTaskPayload }
  | { type: EKanbanBoardActions.DRAG_DROP_TASK_BETWEEN_COLUMNS; payload: IDragTaskInBetweenColumnsPayload }
  | { type: EKanbanBoardActions.DRAG_DROP_TASK_IN_COLUMN; payload: IDragTaskInColumnPayload }
  | { type: EKanbanBoardActions.DRAG_DROP_COLUMN; payload: IDragDropColumn }
  | { type: EKanbanBoardActions.DRAG_DROP_COLUMN_TASK; payload: IDragDropColumnTask };

export { EKanbanBoardActions };
export type {
  IDragDropColumn,
  IDragDropColumnTask,
  IDragTaskInBetweenColumnsPayload,
  IDragTaskInColumnPayload,
  IEditPriorityTaskPayload,
  IInitialKanbanBoardState,
  TKanbanBoardAction,
};
