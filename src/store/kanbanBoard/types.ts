import { EPriorityName } from '@/constants/taskPriority';
import { IColumn, IKanbanData, ITask } from '@/utils/interfaces';

enum EKanbanBoardActions {
  ADD_COLUMN = 'ADD_COLUMN_KANBAN',
  EDIT_COLUMN = 'EDIT_COLUMN_KANBAN',
  DELETE_COLUMN = 'DELETE_COLUMN_KANBAN',
  ADD_TASK = 'ADD_TASK_KANBAN',
  EDIT_TASK = 'EDIT_TASK_KANBAN',
  DELETE_TASK = 'DELETE_TASK_KANBAN',
  EDIT_PRIORITY_TASK = 'EDIT_PRIORITY_TASK',
  DRAG_DROP_TASK = 'DRAG_DROP_TASK',
  DRAG_DROP_COLUMN = 'DRAG_DROP_COLUMN',
}

interface IInitialKanbanBoardState {
  kanbanData: IKanbanData;
}

interface IEditPriorityTaskPayload {
  taskId: string;
  priorityId: EPriorityName;
}

interface IDragDropTask {
  fromColumnId: string;
  draggedTaskId: string;
  columnId: string;
  taskId: string;
}

interface IDragDropColumn {
  id: string;
  draggedColumnId: string;
  fromColumnId: string;
  draggedTaskId: string;
  taskIds: string[];
}

type TKanbanBoardAction =
  | { type: EKanbanBoardActions.ADD_COLUMN; payload: IColumn }
  | { type: EKanbanBoardActions.EDIT_COLUMN; payload: IColumn }
  | { type: EKanbanBoardActions.DELETE_COLUMN; payload: string }
  | { type: EKanbanBoardActions.ADD_TASK; payload: ITask }
  | { type: EKanbanBoardActions.EDIT_TASK; payload: ITask }
  | { type: EKanbanBoardActions.DELETE_TASK; payload: string }
  | { type: EKanbanBoardActions.EDIT_PRIORITY_TASK; payload: IEditPriorityTaskPayload }
  | { type: EKanbanBoardActions.DRAG_DROP_TASK; payload: IDragDropTask }
  | { type: EKanbanBoardActions.DRAG_DROP_COLUMN; payload: IDragDropColumn };

export { EKanbanBoardActions };
export type { IDragDropColumn, IDragDropTask, IEditPriorityTaskPayload, IInitialKanbanBoardState, TKanbanBoardAction };
