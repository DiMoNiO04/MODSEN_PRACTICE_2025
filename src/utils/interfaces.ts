import { ReactNode } from 'react';

import { EPriorityName } from '@/constants/cardPriority';

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

type ICardWithoutColumnId = Omit<ICard, 'id'>;
type IColumnWithoutCardIds = Omit<IColumn, 'cardIds'>;
type IKanbanCards = Record<string, ICard>;
type IKanbanColums = Record<string, IColumn>;

interface ICard {
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
  cardIds: string[];
}

interface IKanbanData {
  columns: IKanbanColums;
  cards: IKanbanCards;
  columnsOrder: string[];
}

export type {
  ICard,
  ICardWithoutColumnId,
  IChildrenProps,
  IColumn,
  IColumnWithoutCardIds,
  IIconProps,
  IKanbanCards,
  IKanbanColums,
  IKanbanData,
  IOption,
  IText,
};
