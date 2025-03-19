import { ReactNode } from 'react';

import { EPriorityName } from '@/constants/taskPriority';

interface IChildrenProps {
  children: ReactNode;
}

interface IIconProps {
  size?: number;
  color?: string;
}

interface IOption {
  id: string;
  color?: string;
  title: string;
}

interface IText {
  text: string;
}

type IColumnWithoutTaskIds = Omit<IColumn, 'taskIds'>;
type IKanbanTasks = Record<string, ITask>;
type IKanbanColums = Record<string, IColumn>;

interface ITask {
  id: string;
  title: string;
  desc?: string;
  priority: EPriorityName;
  columnId: string;
}

interface IColumn {
  id: string;
  title: string;
  color: string;
  taskIds: string[];
}

interface IKanbanData {
  columns: IKanbanColums;
  tasks: IKanbanTasks;
  columnsOrder: string[];
}

export type {
  IChildrenProps,
  IColumn,
  IColumnWithoutTaskIds,
  IIconProps,
  IKanbanColums,
  IKanbanData,
  IKanbanTasks,
  IOption,
  ITask,
  IText,
};
