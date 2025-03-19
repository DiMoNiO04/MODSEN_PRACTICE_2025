import { IColumn, IKanbanData, ITask } from '@/utils/interfaces';
import { kanbanStorage } from '@/utils/kanbanStorage';

import { EKanbanBoardActions, IInitialKanbanBoardState, TKanbanBoardAction } from './types';

const initialKanbanBoardData: IInitialKanbanBoardState = {
  kanbanData: kanbanStorage.getKanbanData(),
};

const kanbanBoardReducer = (state = initialKanbanBoardData, action: TKanbanBoardAction): IInitialKanbanBoardState => {
  switch (action.type) {
    case EKanbanBoardActions.ADD_COLUMN: {
      const { kanbanData } = state;
      const { columnsOrder, columns } = kanbanData;

      const newColumn = action.payload;
      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: { ...columns, [newColumn.id]: newColumn },
        columnsOrder: [...columnsOrder, newColumn.id],
      };
      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.EDIT_COLUMN: {
      const { kanbanData } = state;
      const { columns } = kanbanData;

      const updatedColumn = action.payload;

      const updatedColums = {
        ...columns,
        [updatedColumn.id]: updatedColumn,
      };

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: updatedColums,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.DELETE_COLUMN: {
      const { kanbanData } = state;

      const columnId = action.payload;
      const updatedKanbanData: IKanbanData = { ...kanbanData };

      const column = updatedKanbanData.columns[columnId];
      column.taskIds.forEach((taskId) => {
        delete updatedKanbanData.tasks[taskId];
      });

      delete updatedKanbanData.columns[columnId];
      updatedKanbanData.columnsOrder = updatedKanbanData.columnsOrder.filter((id) => id !== columnId);

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.ADD_TASK: {
      const { kanbanData } = state;
      const { tasks, columns } = kanbanData;

      const newTask = action.payload;
      const updatedTasks = { ...tasks, [newTask.id]: newTask };

      const updatedColumns = { ...columns };
      updatedColumns[newTask.columnId] = {
        ...updatedColumns[newTask.columnId],
        taskIds: [...updatedColumns[newTask.columnId].taskIds, newTask.id],
      };

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: updatedColumns,
        tasks: updatedTasks,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.EDIT_TASK: {
      const { kanbanData } = state;
      const { tasks, columns } = kanbanData;

      const updatedTask = action.payload;
      const updatedTasks = { ...tasks, [updatedTask.id]: updatedTask };

      const updatedColumns = { ...columns };
      const currentTask = tasks[updatedTask.id];

      if (currentTask.columnId !== updatedTask.columnId) {
        updatedColumns[currentTask.columnId] = {
          ...updatedColumns[currentTask.columnId],
          taskIds: updatedColumns[currentTask.columnId].taskIds.filter((taskId) => taskId !== updatedTask.id),
        };

        updatedColumns[updatedTask.columnId] = {
          ...updatedColumns[updatedTask.columnId],
          taskIds: [...updatedColumns[updatedTask.columnId].taskIds, updatedTask.id],
        };
      } else {
        updatedColumns[currentTask.columnId] = {
          ...updatedColumns[currentTask.columnId],
          taskIds: updatedColumns[currentTask.columnId]
            ? updatedColumns[currentTask.columnId].taskIds.map((taskId) =>
                taskId === updatedTask.id ? updatedTask.id : taskId
              )
            : [],
        };
      }

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: updatedColumns,
        tasks: updatedTasks,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.DELETE_TASK: {
      const { kanbanData } = state;
      const { columns, tasks } = kanbanData;

      const taskId = action.payload;

      const columnId = tasks[taskId]?.columnId;
      if (!columnId) {
        return state;
      }

      const updatedTasks = { ...tasks };
      delete updatedTasks[taskId];

      const updatedColumns = { ...columns };
      updatedColumns[columnId] = {
        ...updatedColumns[columnId],
        taskIds: updatedColumns[columnId].taskIds.filter((id) => id !== taskId),
      };

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: updatedColumns,
        tasks: updatedTasks,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.EDIT_PRIORITY_TASK: {
      const { kanbanData } = state;
      const { tasks } = kanbanData;

      const { taskId, priorityId } = action.payload;

      const updatedTasks = { ...tasks };
      if (updatedTasks[taskId]) {
        updatedTasks[taskId] = {
          ...updatedTasks[taskId],
          priority: priorityId,
        };
      }

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        tasks: updatedTasks,
      };

      kanbanStorage.saveKanbanData(updatedKanbanData);
      return { ...state, kanbanData: updatedKanbanData };
    }

    case EKanbanBoardActions.DRAG_DROP_TASK: {
      const { kanbanData } = state;
      const { columns, tasks } = kanbanData;

      const { fromColumnId, draggedTaskId, columnId, taskId } = action.payload;

      if (draggedTaskId && fromColumnId !== columnId) {
        const fromColumn = columns[fromColumnId];
        const updatedFromTaskIds = fromColumn.taskIds.filter((taskId) => taskId !== draggedTaskId);

        const updatedTask = { ...tasks[draggedTaskId], columnId };

        const updatedTaskIds = [...columns[columnId].taskIds, draggedTaskId];

        const updatedKanbanData: IKanbanData = {
          ...kanbanData,
          columns: {
            ...columns,
            [fromColumnId]: {
              ...fromColumn,
              taskIds: updatedFromTaskIds,
            },
            [columnId]: {
              ...columns[columnId],
              taskIds: updatedTaskIds,
            },
          },
          tasks: {
            ...tasks,
            [draggedTaskId]: updatedTask,
          },
        };

        kanbanStorage.saveKanbanData(updatedKanbanData);
        return { ...state, kanbanData: updatedKanbanData };
      } else if (draggedTaskId && fromColumnId === columnId) {
        const updatedTaskIds = [...columns[columnId].taskIds];
        const fromIndex = updatedTaskIds.indexOf(draggedTaskId);
        const toIndex = updatedTaskIds.indexOf(taskId);

        if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) return state;

        updatedTaskIds.splice(fromIndex, 1);
        updatedTaskIds.splice(toIndex, 0, draggedTaskId);

        const updatedKanbanData: IKanbanData = {
          ...kanbanData,
          columns: {
            ...columns,
            [columnId]: {
              ...columns[columnId],
              taskIds: updatedTaskIds,
            },
          },
        };

        kanbanStorage.saveKanbanData(updatedKanbanData);
        return { ...state, kanbanData: updatedKanbanData };
      }

      return state;
    }

    case EKanbanBoardActions.DRAG_DROP_COLUMN: {
      const { kanbanData } = state;
      const { columnsOrder, columns, tasks } = kanbanData;

      const { draggedColumnId, id, draggedTaskId, taskIds, fromColumnId } = action.payload;

      if (draggedColumnId && draggedColumnId !== id) {
        if (!draggedTaskId) {
          const fromIndex = columnsOrder.indexOf(draggedColumnId);
          const toIndex = columnsOrder.indexOf(id);

          if (fromIndex === -1 || toIndex === -1) return state;

          const updatedColumnsOrder = [...columnsOrder];
          updatedColumnsOrder.splice(fromIndex, 1);
          updatedColumnsOrder.splice(toIndex, 0, draggedColumnId);

          const updatedKanbanData: IKanbanData = {
            ...kanbanData,
            columnsOrder: updatedColumnsOrder,
          };

          kanbanStorage.saveKanbanData(updatedKanbanData);
          return { ...state, kanbanData: updatedKanbanData };
        }
      }

      if (draggedTaskId) {
        const updatedTaskIds = [...taskIds];

        if (fromColumnId === id) return state;

        const fromColumn: IColumn = columns[fromColumnId];
        const updatedFromTaskIds: string[] = fromColumn.taskIds.filter((taskId) => taskId !== draggedTaskId);

        const updatedTask: ITask = { ...tasks[draggedTaskId], columnId: id };

        const updatedKanbanData: IKanbanData = {
          ...kanbanData,
          columns: {
            ...columns,
            [fromColumnId]: {
              ...fromColumn,
              taskIds: updatedFromTaskIds,
            },
            [id]: {
              ...columns[id],
              taskIds: [...updatedTaskIds, draggedTaskId],
            },
          },
          tasks: {
            ...tasks,
            [draggedTaskId]: updatedTask,
          },
        };

        kanbanStorage.saveKanbanData(updatedKanbanData);
        return { ...state, kanbanData: updatedKanbanData };
      }

      return state;
    }

    default: {
      return state;
    }
  }
};

export { kanbanBoardReducer };
