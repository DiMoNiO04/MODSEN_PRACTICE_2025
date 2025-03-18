import { EPriorityName } from '@/constants/cardPriority';

interface IChildrenProps {
  children: React.ReactNode;
}

interface IIconProps {
  size?: number;
  color?: string;
}

interface IFormDataColumn {
  id: string;
  title: string;
  color: string;
}

interface IOption {
  id: string;
  color?: string;
  title: string;
}

interface IText {
  text: string;
}

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
  columns: Record<string, IColumn>;
  cards: Record<string, ICard>;
  columnsOrder: string[];
}

export type { ICard, IChildrenProps, IColumn, IFormDataColumn, IIconProps, IKanbanData, IOption, IText };
